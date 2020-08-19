interface IAdress {
  email: String;
  name: String;
}

export interface IMessage {
  to: IAdress;
  from: IAdress;
  subject: String;
  body: String;
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}