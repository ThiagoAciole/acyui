import type { IconName } from 'acioleui';
import { Code, Flex, Icon, iconRegistry, Input, PageHeader, useToast } from 'acioleui';
import { useCallback, useMemo, useState } from 'react';
import './icons-section.css';

const ALL_ICONS = Object.keys(iconRegistry) as IconName[];

export function IconsSection() {
  const { toast } = useToast();
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return ALL_ICONS;
    return ALL_ICONS.filter((name) => name.includes(q));
  }, [search]);

  const handleCopy = useCallback((name: string) => {
    navigator.clipboard.writeText(name).then(() => {
      setCopied(name);
      setTimeout(() => setCopied(null), 1500);
      toast({ title: `"${name}" copiado!`, color: 'success', variant: 'snackbar' });
    });
  }, [toast]);

  return (
    <div className="icons-section">
      <PageHeader
        title="Icones"
        description="Icones disponiveis no AcioleUI"
        mb='0'
      />
      <Code style={{ backgroundColor: 'var(--border-neutral)', width: '350px' }}>
        {`import { Icon } from 'acioleui';`}
        {`<Icon name="search" size={16} />`}
      </Code>

      <Input
        placeholder="Pesquisar icones..."
        prefix={<Icon name="search" size={16} />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        full
      />


      {filtered.length === 0 ? (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: '4rem' }}>
          <Flex direction="column" align="center" gap='2'>
            <Icon name="ghost" size={32} color='#94a3b8' />
            <p className="icons-section__empty">Nenhum icone encontrado para &quot;{search}&quot;.</p>
          </Flex>

        </div>
      ) : (
        <div className="icons-section__grid">
          {filtered.map((name) => {
            const isCopied = copied === name;
            return (
              <button
                key={name}
                type="button"
                className={`icons-section__card${isCopied ? ' icons-section__card--copied' : ''}`}
                onClick={() => handleCopy(name)}
                title={`Copiar "${name}"`}
              >
                <Icon name={name} size={22} />
                <span className="icons-section__name">{name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
