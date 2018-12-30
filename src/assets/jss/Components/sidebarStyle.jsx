import {
	defaultFont,
	primaryColor,
	primaryBoxShadow,
	infoColor,
	successColor,
	warningColor,
	dangerColor
} from '../material-dashboard-react.jsx';

const sidebarStyle = theme => ({
	background: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		'&:after': {
			position: 'absolute',
			width: '100%',
			height: '100%',
			content: '""',
			background: '#000',
			opacity: '.8'
		}
	},
	item: {
		position: 'relative',
		display: 'block',
		textDecoration: 'none',
		'&:hover,&:focus,&:visited,&': {
			color: '#FFFFFF'
		}
	},
	itemText: {
		...defaultFont,
		margin: '0',
		lineHeight: '30px',
		fontSize: '14px',
		color: '#FFFFFF'
	},
	whiteFont: {
		color: '#FFFFFF'
	},
	purple: {
		backgroundColor: primaryColor,
		...primaryBoxShadow,
		'&:hover': {
			backgroundColor: primaryColor,
			...primaryBoxShadow
		}
	},
	blue: {
		backgroundColor: infoColor,
		boxShadow:
			'0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)',
		'&:hover': {
			backgroundColor: infoColor,
			boxShadow:
				'0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)'
		}
	},
	green: {
		backgroundColor: successColor,
		boxShadow:
			'0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)',
		'&:hover': {
			backgroundColor: successColor,
			boxShadow:
				'0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)'
		}
	},
	orange: {
		backgroundColor: warningColor,
		boxShadow:
			'0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)',
		'&:hover': {
			backgroundColor: warningColor,
			boxShadow:
				'0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)'
		}
	},
	red: {
		backgroundColor: dangerColor,
		boxShadow:
			'0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)',
		'&:hover': {
			backgroundColor: dangerColor,
			boxShadow:
				'0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)'
		}
	},
	sidebarWrapper: {
		position: 'relative',
		height: 'calc(100vh - 75px)',
		overflow: 'auto',
		width: '260px',
		zIndex: '4',
		overflowScrolling: 'touch'
	}
});

export default sidebarStyle;
