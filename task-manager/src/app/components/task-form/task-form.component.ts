this.form = this.fb.group({
  title: ['', [Validators.required, Validators.maxLength(100)]],
  description: ['', [Validators.maxLength(500)]],
  priority: ['Medium', Validators.required],
  status: ['To Do', Validators.required],
  dueDate: ['', [Validators.required, this.futureDateValidator]]
});

futureDateValidator(control: AbstractControl) {
  const date = new Date(control.value);
  return date > new Date() ? null : { pastDate: true };
}
