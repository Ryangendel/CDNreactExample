const App = () => {

    let dogName = "Fido"

    return (
        <div id="bulldog">
            {`My dogs name is ${false?"Runa":"George"}`}
        </div>
    )
}

// function whatami(n){
//     if (n<2){
//         return n
//     }
//     return whatami(n-1) + whatami(n-1)
// }

ReactDOM.render(<h1>hello from Denver</h1>, document.getElementById('bulldog'));