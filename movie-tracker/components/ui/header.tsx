
function Header(props: { title: string }) {
    return (
    <div>
        <h1 className="text-2xl text-[#18453B] font-bold">{props.title}</h1>
    </div>
    )
}

export default Header;