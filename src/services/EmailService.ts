interface IMailTo {
	name: string;
	email: string;
}

interface IMailMessage {
	subject: string;
	body: string;
	attachment?: Array<string>;
}

interface IMessageDTO {
	to: IMailTo;
	message: IMailMessage;
}

interface IMailService {
	sendMail(request: IMessageDTO): void;
}

export default class EmailService implements IMailService {
	sendMail({ to, message }: IMessageDTO) {
		console.log(`Email enviado para ${to.name}: ${message.subject}.`);
	}
}
