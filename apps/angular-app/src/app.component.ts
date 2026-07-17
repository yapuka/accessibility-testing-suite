import { createButtonComponent } from './components/button/Button';
import { createInputComponent } from './components/input/Input';

export interface AngularDemoComponent {
  title: string;
  fieldLabel: string;
  fieldName: string;
}

export interface ButtonExampleItem {
  label: string;
  icon: string;
  action: string;
  disabled: boolean;
}

export function getButtonExamples(): ButtonExampleItem[] {
  return [
    { label: 'Save changes', icon: '✓', action: 'save', disabled: false },
    { label: 'Open settings', icon: '⚙', action: 'settings', disabled: false },
    { label: 'Delete item', icon: '🗑', action: 'delete', disabled: true },
  ];
}

export function createAppComponent(component: AngularDemoComponent): string {
  const buttons = getButtonExamples();
  const buttonMarkup = buttons.map((button) => createButtonComponent(button)).join('');

  return `
<section>
  <h1>${component.title}</h1>
  <section>
    <h2>Input example</h2>
    ${createInputComponent({ id: component.fieldName, label: component.fieldLabel, name: component.fieldName })}
  </section>
  <section>
    <h2>Button examples</h2>
    <div>${buttonMarkup}</div>
  </section>
</section>
`;
}
