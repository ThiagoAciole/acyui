import * as Labs from '@aciole/acyon';
import {
  Box,
  Code,
  Flex,
  Icon,
  IconButton,
  Input,
  Select,
  Switch,
  Text,
  TextArea,
} from '@aciole/acyon';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import ts from 'typescript';
import { playgroundConfigs } from '../../data/registry';
import type { ComponentMeta } from '../../data/types';
import './styles.css';

interface LivePlaygroundProps {
  route: ComponentMeta;
}

type PreviewTab = 'preview' | 'code';

function renderSnippet(code: string) {
  const transpiled = ts.transpileModule(code, {
    compilerOptions: {
      jsx: ts.JsxEmit.React,
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.ESNext,
    },
  }).outputText;

  const executor = new Function(
    'React',
    'Labs',
    `
      return (() => {
        ${transpiled}
      })();
    `,
  ) as (react: typeof React, labs: typeof Labs) => React.ReactNode;

  return executor(React, Labs);
}

export function LivePlayground({ route }: LivePlaygroundProps) {
  const config = playgroundConfigs[route.id];
  const [activeTab, setActiveTab] = useState<PreviewTab>('preview');
  const [propsState, setPropsState] = useState<Record<string, unknown>>(config?.initialProps ?? {});

  useEffect(() => {
    setActiveTab('preview');
    setPropsState(config?.initialProps ?? {});
  }, [config, route.id]);

  const code = useMemo(() => {
    return config ? config.generateCode(propsState) : '';
  }, [config, propsState]);

  const result = useMemo(() => {
    try {
      return {
        element: config ? config.render(propsState) : renderSnippet(code),
        error: null,
      };
    } catch (error) {
      return {
        element: null,
        error: error instanceof Error ? error.message : 'Erro desconhecido ao renderizar o componente.',
      };
    }
  }, [code, config, propsState]);

  const handleValueChange = (name: string, value: unknown) => {
    setPropsState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <div className="component-playground">
      <div className="component-playground__main">
        <div className="component-playground__toolbar">
          <div className="component-playground__tabs">
            <button
              type="button"
              className={`component-playground__tab ${activeTab === 'preview' ? 'component-playground__tab--active' : ''}`}
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </button>
            <button
              type="button"
              className={`component-playground__tab ${activeTab === 'code' ? 'component-playground__tab--active' : ''}`}
              onClick={() => setActiveTab('code')}
            >
              Code
            </button>
          </div>

          <IconButton
            aria-label="Copiar codigo"
            icon={<Icon name="copy" size={16} />}
            onClick={() => navigator.clipboard?.writeText(code)}
            variant="ghost"
            size="small"
          />
        </div>

        {activeTab === 'preview' ? (
          <Box className="live-preview-shell">
            <div className="live-preview-shell__label">Live Preview</div>
            <div className="live-preview-shell__stage">
              {result.error ? (
                <Box className="live-preview-error">
                  <Text weight="bold">Erro ao renderizar</Text>
                  <Code>{result.error}</Code>
                </Box>
              ) : (
                result.element
              )}
            </div>
          </Box>
        ) : (
          <div className="live-code-panel">
            <pre className="live-code-panel__pre">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>

      <aside className="component-playground__panel">
        <div className="component-playground__panel-header">
          <Flex align="center" gap="2">
            <Icon name="settings" size={16} />
            <Text as="span" size="small" weight="bold">Properties</Text>
          </Flex>

          <IconButton
            aria-label="Resetar propriedades"
            icon={<Icon name="refresh" size={16} />}
            onClick={() => setPropsState(config?.initialProps ?? {})}
            variant="ghost"
            size="small"
          />
        </div>

        <div className="component-playground__panel-body">
          {config ? (
            config.controls.map((control) => {
              const value = propsState[control.name];

              if (control.type === 'text') {
                return (
                  <Input
                    key={control.name}
                    label={control.label}
                    value={String(value ?? '')}
                    placeholder={control.placeholder}
                    onChange={(event) => handleValueChange(control.name, event.target.value)}
                    full
                  />
                );
              }

              if (control.type === 'textarea') {
                return (
                  <TextArea
                    key={control.name}
                    label={control.label}
                    value={String(value ?? '')}
                    placeholder={control.placeholder}
                    onChange={(event) => handleValueChange(control.name, event.target.value)}
                    full
                  />
                );
              }

              if (control.type === 'boolean') {
                return (
                  <div key={control.name} className="component-playground__switch">
                    <Switch
                      label={control.label}
                      checked={Boolean(value)}
                      onChange={(event) => handleValueChange(control.name, event.target.checked)}
                    />
                  </div>
                );
              }

              if (control.type === 'select') {
                return (
                  <Select
                    key={control.name}
                    label={control.label}
                    value={String(value ?? '')}
                    onChange={(nextValue) => handleValueChange(control.name, nextValue)}
                    options={control.options}
                    full
                  />
                );
              }

              return null;
            })
          ) : (
            <div className="component-playground__empty">
              <Text weight="semibold">Sem propriedades configuradas</Text>
              <Text size="small" color="neutral">
                Este componente ainda usa apenas preview e source estatico.
              </Text>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
