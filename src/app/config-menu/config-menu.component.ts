import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../core/models/user';
import { ConfigService } from '../core/services/config.service';

@Component({
  selector: 'app-config-menu',
  templateUrl: './config-menu.component.html',
  styleUrls: ['./config-menu.component.scss'],
})
export class ConfigMenuComponent implements OnInit {
  configForm: FormGroup;

  @Input() user: User;
  @Output() userChange: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private formBuilder: FormBuilder,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.configForm = this.formBuilder.group({
      showWelcomeMessage: this.user.configuration.showWelcomeMessage,
      showTest1: this.user.configuration.showTest1,
      showTest2: this.user.configuration.showTest2
    });
  }

  saveConfig() {
    const payload: User = {
      username: this.user.username,
      configuration: this.configForm.value
    };

    this.configService.saveConfig(payload)
    .subscribe((response: User) => {
      localStorage.setItem('user', JSON.stringify(response));
      this.userChange.emit(response);
    });
  }
}
