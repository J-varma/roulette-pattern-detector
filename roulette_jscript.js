var color_pattern=[];           //red or black 
var type_pattern=[];            //even or odd
var size_pattern=[];            //high or low
var props=[null, null, null];   //stores the common properties. [color, type, size]
var opp;                        //stores opposite property
var p1,p2,p3;                   //string variables to modify innerHTML


$(document).ready(function()
{
    $("td ").click(function()
    {
        
        var num=Number(this.getAttribute("value"));
        if (num==0)
        {
            color_pattern=[];
            type_pattern=[];
            size_pattern=[];
            $("#pattern1").html("<p>0</p>");
            $("#pattern2").html("<p>0</p>");
            $("#pattern3").html("<p>0</p>");
        }
        else
        {
            var clr=String(this.getAttribute("class"));
            pattern(num, clr);            
        }
 
    });
});



function set_props(num, clr)
{
    var temp_props=[null, null, null];
    temp_props[0]=clr;
    if (num%2==0)
    {
        temp_props[1]="even";
    }
    else
    {
        temp_props[1]="odd";
    }
    if (num<19)
    {
        temp_props[2]="low";
    }
    else
    {
        temp_props[2]="high";
    }
    return temp_props;
}

function pattern(num, clr)
{
    
    if(color_pattern.length==0)
    {
        color_pattern.push(num);
        type_pattern.push(num);
        size_pattern.push(num);
        props=set_props(num, clr);
        
    }
    else
    {
        temp_props=set_props(num, clr);

        if (props[0]==temp_props[0])
        {
            color_pattern.push(num);
        }
        else
        {
            color_pattern=[];
            color_pattern.push(num);
            props[0]=temp_props[0];
        }

        if (props[1]==temp_props[1])
        {
            type_pattern.push(num);
        }
        else
        {
            type_pattern=[];
            type_pattern.push(num);
            props[1]=temp_props[1];
        }

        if (props[2]==temp_props[2])
        {
            size_pattern.push(num);
        }
        else
        {
            size_pattern=[];
            size_pattern.push(num);
            props[2]=temp_props[2];
        }
    }

    if (color_pattern.length>4)
    {
        if (props[0]=="black")
        opp="red";
        else
        opp="black";
        p1="<p>"+color_pattern+"<br>"+color_pattern.length+" "+props[0]+" numbers detected.<br><h2>Stake on "+opp+" !!<h2></p>";
    }
    else
    p1="<p>"+color_pattern+"</p>";

    if (type_pattern.length>4)
    {
        if (props[1]=="even")
        opp="odd";
        else
        opp="even";
        p2="<p>"+type_pattern+"<br>"+type_pattern.length+" "+props[1]+" numbers detected.<br><h2>Stake on "+opp+" !!<h2></p>";
    }
    else
    p2="<p>"+type_pattern+"</p>";


    if (size_pattern.length>4)
    {
        if (props[2]=="high")
        opp="low";
        else
        opp="high";
        p3="<p>"+size_pattern+"<br>"+size_pattern.length+" "+props[2]+" numbers detected.<br><h2>Stake on "+opp+" !!<h2></p>";
    }
    else
    p3="<p>"+size_pattern+"</p>";

    $("#pattern1").html(p1);
    $("#pattern2").html(p2);
    $("#pattern3").html(p3);

}   