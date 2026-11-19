export interface FormState<TData, TErrors = Partial<Record<keyof TData, string>>> {
  values: TData;
  errors: TErrors;
  isSubmitting: boolean;
  isValid: boolean;
}

export type Validator<T> = (values: T) => Partial<Record<keyof T, string>>;

export class FormManager<T extends Record<string, any>> {
  private state: FormState<T>;
  private listeners: Set<(state: FormState<T>) => void> = new Set();

  constructor(initialValues: T, private validate?: Validator<T>) {
    this.state = {
      values: { ...initialValues },
      errors: {},
      isSubmitting: false,
      isValid: true,
    };
  }

  public setField<K extends keyof T>(field: K, value: T[K]) {
    this.state.values[field] = value;
    if (this.validate) {
      this.state.errors = this.validate(this.state.values);
      this.state.isValid = Object.keys(this.state.errors).length === 0;
    }
    this.notify();
  }

  public async handleSubmit(onSubmit: (values: T) => Promise<void>) {
    if (this.validate) {
      this.state.errors = this.validate(this.state.values);
      this.state.isValid = Object.keys(this.state.errors).length === 0;
      if (!this.state.isValid) {
