//Data variables

//OPTION VALUES ARRAYS
const timezoneArray = [
	{value: 'utc-11', displayValue: 'GMT/UTC-11'},
	{value: 'utc-10', displayValue:'GMT/UTC-10'},
	{value: 'utc-9', displayValue:'GMT/UTC-9'},
	{value: 'utc-8', displayValue:'GMT/UTC-8'},
	{value: 'utc-7', displayValue:'GMT/UTC-7'},
	{value: 'utc-6', displayValue:'GMT/UTC-6'},
	{value: 'utc-5', displayValue:'GMT/UTC-5'},
	{value: 'utc-4', displayValue:'GMT/UTC-4'},
	{value: 'utc-3', displayValue:'GMT/UTC-3'},
	{value: 'utc-2', displayValue:'GMT/UTC-2'},
	{value: 'utc-1', displayValue:'GMT/UTC-1'},
	{value: 'utc-0', displayValue:'GMT/UTC+0'},
	{value: 'utc+1', displayValue:'GMT/UTC+1'},
	{value: 'utc+2', displayValue:'GMT/UTC+2'},
	{value: 'utc+3', displayValue:'GMT/UTC+3'},
	{value: 'utc+4', displayValue:'GMT/UTC+4'},
	{value: 'utc+5', displayValue:'GMT/UTC+5'},
	{value: 'utc+6', displayValue:'GMT/UTC+6'},
	{value: 'utc+7', displayValue:'GMT/UTC+7'},
	{value: 'utc+8', displayValue:'GMT/UTC+8'},
	{value: 'utc+9', displayValue:'GMT/UTC+9'},
	{value: 'utc+10', displayValue:'GMT/UTC+10'},
	{value: 'utc+11', displayValue:'GMT/UTC+11'},
	{value: 'utc+12', displayValue:'GMT/UTC+12'},
	{value: 'utc+13', displayValue:'GMT/UTC+13'},
	{value: 'utc+14', displayValue:'GMT/UTC+14'},
];

const subscribtionArray = [
	{ value: 'debugging', displayValue: 'Debugging' },
	{ value: 'maintanance', displayValue: 'Maintanance'}
];

const emailSubscribtionArray = [
	{ value: 'newsletter', displayValue: 'Newsletter' },
	{ value: 'specialOffer', displayValue: 'Special Offer'}
];

//Helper Constructor Functions
const formInputCreator = (elType, label, configType, configPlaceholder, optional, required, valid) => {
	return {
		label:label,
		elementType: elType,
		elementConfig: {
			type: configType,
			placeholder: configPlaceholder
		},
		value: '',
		validation: {
			required: required,
			optional: optional
		},
		valid: valid,
		touched: false,
		
	};
}
const formOptionsInputCreator = (elType, label, options) =>{
	return {
		label: label,
		elementType: elType,
		elementConfig:{
			options: options
		},
		value: options[0].value,
		valid: true,
	};
};

//Export Object

export const formData = {
	name: formInputCreator('input', 'Name', 'text', 'Your Name', false, true, false),
	email: formInputCreator('input', 'E-mail',  'email', 'Your E-mail', true, true, true),
	whatsapp: formInputCreator('input', 'WhatsApp Number',  'text', 'Your WhatsApp Number', true, true, true),
	telegram: formInputCreator('input', 'Telegram Number',  'text', 'Your Telegram Number', true, true, true),
	skype: formInputCreator('input', 'Skype',  'text', 'Your Skype', true, true, true),
	facebook:formInputCreator('input','Facebook',   'text', 'Link to your facebook account', true, true, true),
	vk:formInputCreator('input','Vkontakte',  'text', 'Link to your VK account', true, true, true),
	country:formInputCreator('input', 'Country',  'text', 'Country which you are currently in', false, true, false),
	city:formInputCreator('input', 'City',  'text', 'City which you are currently in', false, true, false),
	timezone:formOptionsInputCreator('select', 'Timezone',  timezoneArray),
	additionalInfo: formInputCreator('textarea', 'Additional information',   'text', 'Additional information we should know about. For example: available hours', true, false, true),
};

export const authFormData = {
	email: {
		label: 'E-mail',
		elementType: 'input',
		elementConfig:{
			type:'email',
			placeholder: 'E-mail'
		},
		value: '',
		validation: {
			required: true,
			isEmail: true
		},
		valid: false,
		touched: false
	},
	password: {
		label: 'Password',
		elementType: 'input',
		elementConfig: {
			type:'password',
			placeholder: 'Type in Your Password'
		},
		value: '',
		validation: {
			required: true,
			minLength: 6
		},
		valid: false,
		touched: false
	}
};

export const signupData = {
	name: {
		label: 'Name/Nickname',
		elementType: 'input',
		elementConfig:{
			type:'text',
			placeholder: 'Name yourself, soldier'
		},
		value: '',
		validation: {
			required: true,
		},
		valid: false,
		touched: false
	},
	email: {
		label: 'E-mail',
		elementType: 'input',
		elementConfig:{
			type:'email',
			placeholder: 'E-mail'
		},
		value: '',
		validation: {
			required: true,
			isEmail: true
		},
		valid: false,
		touched: false
	},
	password: {
		label: 'Password',
		elementType: 'input',
		elementConfig: {
			type:'password',
			placeholder: 'Type in Your Password'
		},
		value: '',
		validation: {
			required: true,
			minLength: 6
		},
		valid: false,
		touched: false
	},
	confirmPassword: {
		label: 'Confirm Password',
		elementType: 'input',
		elementConfig: {
			type:'password',
			placeholder: 'Confirm your password'
		},
		value: '',
		validation: {
			required: true,
			minLength: 6
		},
		valid: false,
		touched: false
	},
	
};

export const signupKey = {
	key: {
		label: 'Key',
		elementType: 'input',
		elementConfig:{
			type:'password',
			placeholder: 'the authentication key'
		},
		value: '',
		validation: {
			required: true
		},
		valid: false,
		touched: false
	},
};

export const newOrderData = {
	nameOfTheOrder: formInputCreator('input', 'Name of the Order', 'text', 'name of the order' ),
	description: formInputCreator('textarea', 'Description', 'text', '*description' ),
	name: formInputCreator('input', 'Name', 'text', 'name'),
	contactData: formInputCreator('input', 'Contact Data', 'text', 'contact data'),
	location: formInputCreator('input', 'Location', 'text', 'location'),
	timezone: formInputCreator('input', 'Timezone', 'text', 'time zone'),
	notes: formInputCreator('textarea', 'Notes', 'text', 'Notes:' ),
};

export const newClientData = {
	image: formInputCreator('file', 'Image', 'file'),
	link: formInputCreator('input', 'Link', 'text', 'link from their website' ),
	name: formInputCreator('input', 'Name', 'text', 'enter the name'),
	character: formInputCreator('textarea', 'Character', 'text', 'describe the character'),
	subscribtion: formOptionsInputCreator('select', 'Subscribtion', subscribtionArray),
	email_subsribtion: formOptionsInputCreator('select', 'Email Subscribtion', emailSubscribtionArray),
	contactData: formInputCreator('input', 'Contact Data', 'text', 'contact data'),
	moneyTransaction: formInputCreator('input', 'Money Transaction', 'text', 'how much money paid'),
	projects: formInputCreator('input', 'Finished Projects', 'text', 'how many projects finished'),
	satisfactionRate: formInputCreator('input', 'Satisfaction Rate', 'text', 'how satisfied the client is')
};