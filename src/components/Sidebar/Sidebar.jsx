// core components
const drawerWidth = 240;

const sidebarStyle = theme => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},

	item: {
		position: 'relative',
		display: 'block',
		textDecoration: 'none',
		'&:hover,&:focus,&:visited,&': {
			color: '#FFFFFF'
		}
	},
	list: {
		marginTop: '20px',
		paddingLeft: '0',
		paddingTop: '0',
		paddingBottom: '0',
		marginBottom: '0',
		listStyle: 'none',
		position: 'unset'
	},
	itemText: {
		margin: '0',
		lineHeight: '30px',
		fontSize: '14px',
		color: '#FFFFFF'
	},
	itemLink: {
		width: 'auto',
		transition: 'all 300ms linear',
		margin: '10px 15px 0',
		borderRadius: '3px',
		position: 'relative',
		display: 'block',
		padding: '10px 15px',
		backgroundColor: 'transparent'
	},
	whiteFont: {
		color: '#FFFFFF'
	},
	toolbar: theme.mixins.toolbar,
	background: {
		position: 'absolute',
		zIndex: -1,
		height: '100%',
		width: '100%',
		display: 'block',
		top: '0',
		left: '0',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		'&:after': {
			position: 'absolute',
			width: '100%',
			height: '100%',
			content: '""',
			display: 'block',
			background: '#000',
			opacity: '.8'
		}
	},
	blue: {
		backgroundColor: '#00acc1',
		boxShadow:
			'0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)',
		'&:hover': {
			backgroundColor: '#00acc1',
			boxShadow:
				'0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)'
		}
	}
});

export default sidebarStyle;
