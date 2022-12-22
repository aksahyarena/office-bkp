// boolean built in function
// --valueOf
// toString()

document.write("*******************Boolean built function list******************<br><br>")
document.write("<span style='color:blue'>This is the toString() and valueOf() function</span><br>")
var flag_tostring = new Boolean(false);
document.write("value of flag_tostring =" + flag_tostring)
var flag_valueof = new Boolean(true);
document.write("<br> value of flag_valueof =" + flag_valueof);


document.write("<br><br>*******************String built function list*******Pass the INdex number,INdex no.starts from ' 0 ' ***********<br><br>")
document.write("<span style='color:blue'>This is the charAt() , CharCodeAt(),  indexOf(),  lastIndexOf(), match(), ,replace(), searh(), slice(), split(), subStr(), subString(), toUpperCase(), ,toLowerCase(), valueOf(), toString(), function</span><br>")
document.write("<pre style='color:red'>//charAt() and charCodeAt() function//</pre>")
var char_AT = new String("Happy is Happy");
document.write("value of char_at_tostring =" + char_AT.charAt(6))
var char_code_at = new String("Happy is Happy")
document.write("<br> value of char_code_at_valueof =" + char_code_at.charCodeAt(6));

document.write("<br>This is the concat() function")
document.write("<pre style='color:red'>//concat() function//</pre>")
var con_act_1 = new String("This is the first string ")
var con_act_2 = new String("This is the second string")
document.write("The concatinated string will be = " + con_act_1.concat("," + con_act_2) + "<br><br>")

var index_of = new String("This is Pune");
document.write("<pre style='color:red'>//indexOf and lastIndexOf() function//</pre>")
document.write("the indexOf 'is' will be = " + index_of.indexOf("is") + "<br>");
document.write("and the indexOf 'is' will be = " + index_of.lastIndexOf("is") + "<br><br>");


var len_gth = new String("This is Pune<br>");
document.write("<pre style='color:red'>//length function//</pre>")
document.write("the length of 'len_gth'  variable will be = " + len_gth.length + "<br><br>");

var mat_ch = new String("I am eating a mango");
document.write("<pre style='color:red'>//match() function//</pre>")
var match_string = mat_ch.match("eating");
// debugger;
if (match_string == "eating") {
    document.write("match string found<br><br>")
}
else {
    document.write("Not found<br><br>")
}

document.write("<pre style='color:red'>//replace() function//</pre>")
var rep_lace = new String("I am learning the react now");
document.write("i am replacing the react to =" + rep_lace.replace("react", "javascript"));

var rep_lace2 = new String("My name is Blue and i like the blue car and blue bike");
document.write("<br><br>i am replacing the blue word to =" + rep_lace2.replace(/blue/g, "red"))
document.write("<br><br>i am replacing the blue word to =" + rep_lace2.replace(/blue/gi, "red"))

document.write("<br><pre style='color:red'>//search() function is same as the indexOf(),It returns the index number of the string of the privided word/character//</pre><br><br>")

document.write("<pre style='color:red'>//thi is slice() function//</pre>")
var sli_ce = new String("I want to learn react after javascript")
document.write("<br>I am getting the string from the word 'want to last'=" + sli_ce.slice(2))
document.write("<br>I am getting the string from the word 'want to after'=" + sli_ce.slice(2, 27))

document.write("<pre style='color:red'>//sli_ce.slice(2) ka matlab kya haiy ki 2 se start hoga aur last tak ke pure words preint karega <br> and  sli_ce.slice(2,27) matlab kya haiy ke 2 se start karega aur 27 index number ke pahile tak ke jitne bhi words hoge woh print karega//</pre><br><br>")

document.write("<pre style='color:red'>//This is spilt() function//</pre>")

var spl_it=new String("How old are you")
var my_split_Array=spl_it.split(" ")
document.write("<br>my splitted string is ="+my_split_Array + " ==> Look that in console, you will find the splitted array")
console.log("the new array of my_split_Array=")
console.log( my_split_Array)
document.write("<br><br><pre style='color:red'>Split with the limit option</pre>")

var spl_it_with_limit=new String("How old are you")
var my_split_Array_with_limit=spl_it_with_limit.split(" ",2)
document.writeln("new splitted array wit the limit ="+ my_split_Array_with_limit+" ==> Look at in consoe")
console.log("the new array of my_split_Array_with_limit=")
console.log(my_split_Array_with_limit)







