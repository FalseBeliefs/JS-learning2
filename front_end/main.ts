document.querySelector("#show_users_btn")!.addEventListener("click", async () => {
    const users = await (await fetch("http://localhost:9002/users", { method: "GET" } )).json();
    let data_container = document.querySelector("#users_data") as HTMLElement; // If you want to access style property element needs to be passed as an HTMLElement
    data_container.style.overflow = "scroll";
    if (data_container) {
        data_container.replaceChildren();
        for (let user of users) {
            let user_instance = document.createElement("p")
            user_instance.innerHTML = [user.first_name, user.last_name, user.email].toString();
            data_container.appendChild(user_instance);
        }
    }
})

// document.querySelectorAll("button")[0].addEventListener("click", async () => {
//     // const users = await (await fetch("http://localhost:9002/users")).json();
//     let users;
//     let data_container = document.querySelector("#data_container")!;
//         data_container.innerHTML = "Loading"
//     fetch("http://localhost:9002/users").then((response: Response) => {
//         response.json().then((user) => {
//             users = user
//             data_container = document.querySelector("#data_container")!;
//             if (data_container) {
//                 data_container.replaceChildren();
//                 for (let user of users!) {
//                     let user_instance = document.createElement("p")
//                     user_instance.innerHTML = [user.first_name, user.last_name, user.email].toString();
//                     data_container.appendChild(user_instance);
//                 }
//             }
//         })
//     })
// })


let is_open = false;
document.querySelector("#register_btn")!.addEventListener("click", () => {
    if (!is_open) {
        let user_info = document.querySelector('#register_user_data');
        let form = document.createElement('form');
        form.action = "http://localhost:9002/users/register";
        form.method = "POST";

        for (let field of ['first_name', 'last_name', 'email']) {
            let input_field = document.createElement('input');
            input_field.type = 'text';
            input_field.placeholder = field;
            input_field.name = field;
            form.appendChild(input_field);
        }
        is_open = true;
        let confirm_btn = document.createElement('button');
        confirm_btn.textContent = "Confirm registration";
        confirm_btn.type = "submit";
        form.appendChild(confirm_btn);
        if (user_info) {
            user_info.appendChild(form);
        }
        confirm_btn.addEventListener("click", () => {
            alert('User registered successfully!');
        })
    }

})

document.querySelector("#delete_users_btn")!.addEventListener("click", async () => {
    await fetch("http://localhost:9002/users/all", {
        method: "DELETE"
    })
    alert('Users deleted successfully!')
})








