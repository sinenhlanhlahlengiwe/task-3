
const fullname = 'Sinenhlanhla Shezi'
const mybio = "Johannesburg is not just my hometown - it's where I learned to celebrate diversity and multiculturalism. Growing up in Johannesburg, I was immersed in a community enriched by various languages and traditions. Now, as I venture into web development, I carry with me the values of inclusivity and cultural appreciation, ready to create digital spaces that reflect our shared humanity."
const myCellNumber = 'Phone:(+27)67-080-8825'

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("MyfullName").innerText = fullname
    document.getElementById("bio").innerText = mybio
    document.getElementById("phoneNumber").innerText = myCellNumber
    
})
