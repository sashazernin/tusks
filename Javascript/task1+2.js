function loadFn(){
    let str = prompt('Введите слово')
    alert(sayHello(str));
}
function someFn(str){
    str = str.toLowerCase()
    str = str[0].toUpperCase()+str.substr(1)
    return str
}
function sayHello(str){
    str = someFn(str)
    if(str == "Mark"){
        str = "Hi, " + str + "!"
    }
    else{
        str = "Hello, " + str + "!"
    }
    return str
}