//Data variables

//OPTION VALUES ARRAYS
const genderArray = [
		{value:'male', displayValue:'Male'}, 
		{value:'female', displayValue:'Female'}, 
		{value:'other', displayValue:'Other'}
];
const timezoneArray = [
	{value: 'PP_utc-11', displayValue: 'GMT/UTC-11		Pacific/Pago_Pago	Country: American Samoa		City: Pago Pago'},
	{value: 'PT_utc-10', displayValue:'GMT/UTC-10		Pacific/Tahiti	Country: French Polynesia	City: Papeete'},
	{value: 'AS_utc-9', displayValue:'GMT/UTC-9	America/Sitka	Country: United States	City:Sitka'},
	{value: 'AV_utc-8', displayValue:'GMT/UTC-8	America/Vancouver	Country: Canada 	City: Vancouver'},
	{value: 'AF_utc-7', displayValue:'GMT/UTC-7	America/Phoenix	Country: United States	City: Phoenix'},
	{value: 'AM_utc-6', displayValue:'GMT/UTC-6	America/Mexico_City	Country: Mexico 	City: Mexico City'},
	{value: 'AT_utc-5', displayValue:'GMT/UTC-5	America/Toronto	Country: Canada City: Toronto'},
	{value: 'AA_utc-4', displayValue:'GMT/UTC-4	America/Asuncion	Country: Paraguay	City: Asunción'},
	{value: 'AAB_utc-3', displayValue:'GMT/UTC-3 	America/Argentina/Buenos_Aires	Country: Argentina		City:Buenos Aires'},
	{value: 'ANC_utc-2', displayValue:'GMT/UTC-2 	America/Noronha	Coutry: Brazil	City: Itamaracá'},
	{value: 'AAP_utc-1', displayValue:'GMT/UTC-1 	Atlantic/Azores	Country: Portugal	City: Ponta Delgada'},
	{value: 'EL_utc-0', displayValue:'GMT/UTC+0 	Europe/London	Country:United Kingdom	City: London'},
	{value: 'EB_utc+1', displayValue:'GMT/UTC+1	Europe/Berlin	Country:Germany		City: Berlin'},
	{value: 'EH_utc+2', displayValue:'GMT/UTC+2	Europe/Helsinki		Country:Finland		City: Helsinki'},
	{value: 'EM_utc+3', displayValue:'GMT/UTC+3	Europe/Moscow	Country: Russia		City: Moscow'},
	{value: 'AD_utc+4', displayValue:'GMT/UTC+4	Asia/Dubai	Country: United Arab Emirates	City: Dubai'},
	{value: 'AY_utc+5', displayValue:'GMT/UTC+5	Asia/Yekaterinburg	Country: Russia		City: Yekaterinburg'},
	{value: 'AAK_utc+6', displayValue:'GMT/UTC+6	Asia/Almaty		Country:Kazakhstan		City: Almaty'},
	{value: 'ABT_utc+7', displayValue:'GMT/UTC+7	Asia/Bangkok	Country: Thailand	City: Bangkok'},
	{value: 'AI_utc+8', displayValue:'GMT/UTC+8	Asia/Irkutsk	Country: Russia  City: Irkutsk'},
	{value: 'AS_utc+9', displayValue:'GMT/UTC+9	Asia/Seoul	Country: South Korea	City: Seoul'},
	{value: 'ASA_utc+10', displayValue:'GMT/UTC+10	Australia/Sydney	Country: Australia	City: Sydney'},
	{value: 'ASR_utc+11', displayValue:'GMT/UTC+11	Asia/Sakhalin	Country: Russia	 City: Yuzhno-Sakhalinsk'},
	{value: 'PAN_utc+12', displayValue:'GMT/UTC+12	Pacific/Auckland	Country: New Zealand	City: Wellington'},
	{value: 'PAS_utc+13', displayValue:'GMT/UTC+13	Pacific/Apia	Country: Samoa	City: Apia'},
	{value: 'PK_utc+14', displayValue:'GMT/UTC+14	Pacific/Kiritimati	Country: Kiribati	City: Tarawa'},
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
	whatsapp: formInputCreator('input', 'WhatsApp Number',  'number', 'Your WhatsApp Number', true, true, true),
	skype: formInputCreator('input', 'Skype',  'text', 'Your Skype', true, true, true),
	facebook:formInputCreator('input','Facebook',   'text', 'Link to your facebook account', true, true, true),
	vk:formInputCreator('input','Vkontakte',  'text', 'Link to your VK account', true, true, true),
	gender: formOptionsInputCreator('select','Gender',  genderArray),
	country:formInputCreator('input', 'Country',  'text', 'Country which you are currently in', false, true, false),
	city:formInputCreator('input', 'City',  'text', 'City which you are currently in', false, true, false),
	timezone:formOptionsInputCreator('select', 'Timezone',  timezoneArray),
	AdditonalInfo: formInputCreator('textarea', 'Additional information',   'text', 'Additional information we should know about. For example: available hours', true, false, true),
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