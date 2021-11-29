
function main()
{  
    var rh= document.getElementById("rh");
var lh= document.getElementById("lh");
var so= document.getElementById("so");
var su= document.getElementById("su");
var randomnumber;

var rhso=["players/kane.png","players/kohli.png","players/root.png","players/rohit.png"];
var rhsu=["players/rahul.png","players/smith.png","players/maxwell.png","players/stoinis.png"];
var lhso=["players/morgan.png","players/warner.png","players/kock.png","players/jadeja.png"];
var lhsu=["players/stokes.png", "players/gayle.png","players/shakib.png","players/pant.png"]
    if(rh.checked&&so.checked==true)
    {
        alert("A right hand orthodox batsman, what a classic choice!! we've got some world class players, now head on to our next game to build a partnership!!");
        randomnumber = Math.floor(Math.random()*rhso.length);
        
        document.getElementById("nonstriker").src=String(rhso[randomnumber]);
        switch(randomnumber)
        {
            case 0:
                alert("Kane Williamson! the black caps captain will join your hunt for the wc19");
                break;
            case 1:
                alert("Virat Kohli! this king will chase any target with ease");
                break;
            case 2:
                alert("Joe Root! the best englishman at his own home conditions, what else do we have to offer?");
                break;
            case 3:
                alert("Rohit Sharma! the hitman express is here, join the ride coz you are about to see him hit a 300!!!");
                break;
        }
       
    }
    if(rh.checked&&su.checked==true)
    {
        alert("A right hand unorthodox batsman, you love T20 cricket don't you!! we've got some world class players, now head on to our next game to build a partnership!!");
        randomnumber = Math.floor(Math.random()*rhsu.length);
        
        document.getElementById("nonstriker").src=String(rhsu[randomnumber]);
        switch(randomnumber)
        {
            case 0:
                alert("K L Rahul! the miracle opener, T20 is his game, sit back and chillax!!");
                break;
            case 1:
                alert("Steve Smith! Don Bradman resurrected...thats it");
                break;
            case 2:
                alert("Glenn Maxwell! although he prefers left, but he surely delivers: Max-effort Max-run rate Max-entertainment");
                break;
            case 3:
                alert("Marcus Stoinis! POWER HITTER");
                break;
        }
    }
    if(lh.checked&&so.checked==true)
    {
        alert("A left hand orthodox batsman, what a classic choice!! bowlers gonna have some hard time now,don't they?? now head on to our next game to build a partnership!!");
        randomnumber = Math.floor(Math.random()*lhso.length);
        
        
        document.getElementById("nonstriker").src=String(lhso[randomnumber]);
        switch(randomnumber)
        {
            case 0:
                alert("Eoin Morgan! the english captain provides the base for the english line-up, gear up for an ease 300+!!");
                break;
            case 1:
                alert("David Warner! Built to open, Australia's all time best");
                break;
            case 2:
                alert("Quinton De Kock! south african keeper batsman has been a consistent opener for ages!");
                break;
            case 3:
                alert("Ravindra Jadeja! oops sorry, a typo....SIR Ravindra Jadeja!!");
                break;
        }
        
    }
    if(lh.checked&&su.checked==true)
    {
        alert("A left hand unorthodox batsman,looking to trouble the scorers eh!! now head on to our next game to build a partnership!!");
        randomnumber = Math.floor(Math.random()*lhsu.length);
        
        
        document.getElementById("nonstriker").src=String(lhsu[randomnumber]);
        switch(randomnumber)
        {
            case 0:
                alert("Ben Stokes! a match winner, you simply can't set afield for this guy!!");
                break;
            case 1:
                alert("Chris Gayle! King of the T20, take a bow befor you take him with you to bat");
                break;
            case 2:
                alert("Shakib Al Hasan! the bangladeshi South Paw is an absolute gem, he can hit, he can spin, he can pull some stunner catches!");
                break;
            case 3:
                alert("Rishabh Pant! spider-pant, marvel plays cricket!!");
                break;
        }
        
    }
    
}
function redirect()
{
    location.href="game2.html"
}