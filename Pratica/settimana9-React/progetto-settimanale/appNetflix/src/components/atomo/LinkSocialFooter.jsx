const LinkSocialFooter = ({href, icon}) => {
	return (
		<a
			className="text-decoration-none pe-2 text-secondary fs-4"
			href={href}
			target="_blank"
		>
			<i className={icon}></i>
		</a>
	);
};

export default LinkSocialFooter;
