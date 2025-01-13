
function Input({type,name, placeholder}: {type:string,name:string,placeholder:string}){
    return(
        <input type={type} name={name} placeholder={placeholder} className="rounded-xl p-2 box-border bg-neutral-700 text-neutral-200 text-2xl" required />
    );
}

export default Input;