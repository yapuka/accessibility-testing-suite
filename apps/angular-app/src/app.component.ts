export interface AngularDemoComponent {
  title: string;
  fieldLabel: string;
  fieldName: string;
}

export function createAppComponent(component: AngularDemoComponent): string {
  return `
<section>
  <h1>${component.title}</h1>
  <label for="${component.fieldName}">${component.fieldLabel}</label>
  <input id="${component.fieldName}" name="${component.fieldName}" />
</section>
`;
}
