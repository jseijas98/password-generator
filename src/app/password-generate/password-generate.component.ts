import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';

export interface PasswordForm {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

@Component({
  selector: 'app-password-generate',
  templateUrl: './password-generate.component.html',
  styleUrls: ['./password-generate.component.scss'],
})
export class PasswordGenerateComponent implements OnInit {
  ngOnInit(): void {
    this.setPassword();
    console.log(this.form.getRawValue());
    console.log(this.lengthValues);
  }

  private fb = inject(FormBuilder);
  private clipboard = inject(Clipboard);
  public form!: FormGroup;
  public onSubmit: Subject<any> = new Subject();
  copied: boolean = false;

  public lengthValues: number = 10; // I
  public textplaceholder: string = 'CLICK ON GENERATE PASSWORD';
  public newPassword: string = '';

  setPassword() {
    this.form = this.fb.group({
      length: new FormControl({ value: 10, disabled: false }),
      uppercase: new FormControl({ value: false, disabled: false }),
      lowercase: new FormControl({ value: false, disabled: false }),
      numbers: new FormControl({ value: false, disabled: false }),
      symbols: new FormControl({ value: false, disabled: false }),
    });

    this.form.get('length')?.valueChanges.subscribe((value) => {
      this.lengthValues = value;
    });
  }

  submit() {
    this.copied = false;
    console.log('value', this.form.getRawValue());
    this.generateRandomPassword(this.form.getRawValue());
  }

  generateRandomPassword(passwordForm: PasswordForm): string {
    let useUppercase = passwordForm.uppercase;
    let useLowercase = passwordForm.lowercase;
    let useNumbers = passwordForm.numbers;
    let useSymbols = passwordForm.symbols;
    let lengthValue = passwordForm.length;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=[]{}|;:,.<>?';

    let allChars = '';
    if (useUppercase) allChars += uppercaseChars;
    if (useLowercase) allChars += lowercaseChars;
    if (useNumbers) allChars += numberChars;
    if (useSymbols) allChars += symbolChars;

    if (allChars === '') {
      allChars = lowercaseChars;
    }

    let newPassword = '';
    for (let i = 0; i < lengthValue; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      newPassword += allChars.charAt(randomIndex);
    }

    console.log('newPassword: ' + newPassword);

    return (this.newPassword = newPassword);
  }

  copyToClipboard() {
    this.copied = true;
    this.clipboard.copy(this.newPassword);
    setTimeout(() => {
      this.copied = false;
    }, 3000);
  }

  condition(): boolean {
    return this.newPassword !== '';
  }

  fortifyPassword(password: string): string {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

    const allCharacters = uppercaseLetters + lowercaseLetters + digits + specialCharacters;

    const passwordList = password.split('');

    while (passwordList.length < 12) {
        const randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        passwordList.push(randomCharacter);
    }

    for (let i = passwordList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [passwordList[i], passwordList[j]] = [passwordList[j], passwordList[i]];
    }

    const fortifiedPassword = passwordList.join('');

    return fortifiedPassword;
}

}
