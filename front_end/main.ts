let users_open = false;
let users_button = document.querySelector("#show_users_btn")!;
// If you want to access style property element needs to be passed as an HTMLElement
let users_data = document.querySelector("#users_data") as HTMLElement;

users_button.addEventListener("click", async () => {
    if (!users_open) {
        const users = await (await fetch("http://localhost:9002/users", { method: "GET" } )).json();
        users_data.style.overflowY = "scroll";
        for (let user of users) {
            let user_instance = document.createElement("p")
            user_instance.innerHTML = [user.first_name, user.last_name, user.email].toString();
            users_data.appendChild(user_instance);
        }
        users_open = true;
        users_button.textContent = "Close users"
    }
    else {
        users_data.replaceChildren()
        users_button.textContent = "Show all users"
        users_data.style.overflow = "hidden"
        users_open = false;
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
let register_btn = document.querySelector("#register_btn")!

register_btn.addEventListener("click", () => {
    if (!is_open) {
        let user_info = document.querySelector('#register_user_data');
        let form = document.createElement("form");
        form.id = "reg_form"
        form.action = "http://localhost:9002/users/register";
        form.method = "POST";

        for (let field of ['first_name', 'last_name', 'email']) {
            let input_field = document.createElement('input');
            input_field.type = 'text';
            input_field.placeholder = field;
            input_field.name = field;
            form.appendChild(input_field);
        }

        let confirm_btn = document.createElement('button');
        confirm_btn.id = "confirm_reg_btn"
        confirm_btn.textContent = "Confirm registration";
        confirm_btn.type = "submit";
        form.appendChild(confirm_btn);
        if (user_info) {
            user_info.appendChild(form);
        }
        confirm_btn.addEventListener("click", () => {
            alert('User registered successfully!');
        })
        register_btn.textContent = "Close form"
        is_open = true;
    }
    else {
        let register_form = document.querySelector("#reg_form")!
        register_form.remove()
        register_btn.textContent = "Register"
        is_open = false;
    }
})

document.querySelector("#delete_users_btn")!.addEventListener("click", async () => {
    await fetch("http://localhost:9002/users/all", {
        method: "DELETE"
    })
    alert('Users deleted successfully!')
    })
