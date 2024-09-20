function Header(props){
    console.log(props.email)
    return(
        <div>
            <h1>Welcome to Header Section{props.email}</h1>
            <div> hallo Wscubetech</div>
            <div>hallo Wscubetech</div>
        </div>
    )
}
export { Header};