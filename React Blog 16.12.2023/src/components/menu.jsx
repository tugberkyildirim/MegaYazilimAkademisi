const menu_items=[
    {link:"./index.html",adi:"Anasayfa"},
    {link:"./eniac.html",adi:"ENIAC"},
    {link:"./ibm.html",adi:"IBM 701"}
]

const dropdown_items=[
    {link:"./python.html",adi:"Python"},
    {link:"./csharp.html",adi:"C#"},
    {link:"./react.html",adi:"React"},
]


export default function Menu(){
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">Tuğberk Yıldırım </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            
            {menu_items.map((item)=><li class="nav-item">
            <a class="nav-link" aria-current="page" href={item.link}>{item.adi}</a>
            </li>)}

            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" data-bs-target="dropdown" aria-expanded="false">
                Yazılım
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                {dropdown_items.map(item=> <li><a class="dropdown-item" href={item.link}>{item.adi}</a></li>)}

            </ul>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    )
}