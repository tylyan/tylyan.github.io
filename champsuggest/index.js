var champions = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Cassiopeia",
				 "Cho'Gath", "Corki", "Darius", "Diana", "Draven", "Dr. Mundo", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank",
				 "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Irelia", "Janna", "Jarvan IV", "Jax", "Jayce", "Jinx", "Kalista", "Karma", "Karthus",
				 "Kassadin", "Katarina", "Kayle", "Kennen", "Kha'Zix", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", 
				 "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf",
				 "Orianna", "Pantheon", "Poppy", "Quinn", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana",
				 "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere",
				 "Twisted Fate", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xerath", 
				 "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zyra"];

var noList = ["FUCK NO", "HE SUCKS DICK", "I FUCKING HATE THIS GUY", "NAH", "NEXT PLEASE", "HOW DO YOU PLAY THIS GUY"];
var againstList = ["THAT BITCH!", "MOTHERFUCKER", "WHAT A DICK"];
var tryList = ["WHY DON'T YOU FUCKING TRY", "LET'S GO WITH", "YOU CAN KICK HIS ASS WITH", "FREELO INCOMING"];
var suggestList;
var count = 0;
var list;

/**
*Initialization function
*/
function init(){
	createList();
	$(".champ-select").append(list);
	attachListHandlers();
	$("#champName").keyup(function(event){
        if(event.keyCode == 13){
            submit();
        }
    });
}

/**
*Creates the html lists for every champion
*/
function createList(){
	list = "<div class=\"row\"> <div class=\"large-12 columns\"> <ul class=\"small-block-grid-2 large-block-grid-8\">";


	for (var i = 0; i < champions.length; i++){
		var championName = champions[i];
		var fileName = championName.replace("'", "").replace(".", "").replace(" ", "");
		list += "<li class=\"listItem\" id=\"" + fileName + 
					"\"> <a href=\"javascript:void(0)\"> <img src=\"img/" + fileName + 
						".png\"> <div class=\"champ-name\">" + championName + 
							"</div></a></li>";
	}

	list += "</div></div>";
}

function attachListHandlers(){
	$(".listItem").click(function(){
		var champName = $(this).attr('id');
		$("#champName").val(champName);
		submit();
	})
}

/**
*Makes http request to get info on champion
*/
function jGet(champName){
	var url = "http://www.championselect.net/champions/" + champName;
	jQuery.get(url, function(res){
		var code = res["responseText"];
		parseList(code, function(champions){
			suggestList = champions;
			displaySuggestions(count);
		});
		
		//$("body").html(code);
	});
}

/*
*Displays the suggested champion
*/
function displaySuggestions(count){
	var championName = suggestList[count].replace("-", " ");
  championName = capitalize(championName);
	var fileName = championName.replace("'", "").replace(".", "").replace(" ", "");
	var suggest = "<div class=\"row\">";
	count++;
	suggest += "<div class=\"medium-centered suggested\"><img src=\"img/" + fileName + 
					".png\"><div class=\"champ-name\">" + championName + 
						"</div></div></div>"
	$(".suggestion").html(suggest);
	shiftChampSuggest();
}

/**
*Displays the next champion
*/
function next(){
	if (count == 11){
		count = 0;
	}else{
		count++;
	}
	var nextText = noList[(Math.floor(Math.random() * noList.length)) + 1];
	$("#next").html(nextText);
	displaySuggestions(count);
}


/**
*Submits request for champion
*/
function submit(){
	var againstText = againstList[(Math.floor(Math.random() * againstList.length)) + 1];
	$("#againstText").html(againstText);
	var champName = $("#champName").val();
	if (champName == ""){
		console.log("error");
		return;
	}
	playingAgainst(champName);
	jGet(champName);
}

function playingAgainst(champName){
	var fileName = champName.replace("'", "").replace(".", "").replace(" ", "");
	var against = "<div class=\"row\">";
	against += "<div class=\"medium-centered suggested\"><img src=\"img/" + fileName + 
					".png\"><div class=\"champ-name\">" + champName + 
						"</div></div></div>"

	$(".playingAgainst").html(against);
}

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
*Shifts screen to champ-suggest
*/
function shiftChampSuggest(){
	var tryText = tryList[(Math.floor(Math.random() * tryList.length)) + 1];
	$("#tryText").html(tryText);
	$(".champ-select").addClass("invis");
	$(".champ-suggest").removeClass("invis");
}
/**
*Shifts screen to champ-select
*/
function back(){
	$("#champName").val("");
	$(".champ-suggest").addClass("invis");
	$(".champ-select").removeClass("invis");
}
/**
*Parses the html returned and creates list of preferred champions
*/
function parseList(html, callback){
	var champions = [];
	//cut code to focus on weak block section only
	var champName;
	var start = "<div class=\"weak-block\">";
	var end = "<div style=\"margin: 0 0 0 57px;\">";
	var startI = html.indexOf(start);
	var endI = html.indexOf(end);
	var result = html.substring(startI, endI);
	
	for (var i = 0; i < 12; i++){
	//find first champion
	start = "<a href=\"/champions/";
	startI = result.indexOf(start);
	//cut code to begin at first champion
	result = result.substring(startI);
	startI = start.length;
	end = "\"/>";
	endI = result.indexOf(end);
	champName = result.substring(startI, endI);
	champions.push(champName);
	var newSection = "<div class=\"champ-block";
	var newSectionI = result.indexOf(newSection);
	result = result.substring(newSectionI);
	}
	
	callback(champions);
	
	//console.log(result);
}

/**
 * jQuery.ajax mid - CROSS DOMAIN AJAX 
 * ---
 * @author James Padolsey (http://james.padolsey.com)
 * @version 0.11
 * @updated 12-JAN-10
 * ---
 * Note: Read the README!
 * ---
 * @info http://james.padolsey.com/javascript/cross-domain-requests-with-jquery/
 */

jQuery.ajax = (function(_ajax){
    
    var protocol = location.protocol,
        hostname = location.hostname,
        exRegex = RegExp(protocol + '//' + hostname),
        YQL = 'http' + (/^https/.test(protocol)?'s':'') + '://query.yahooapis.com/v1/public/yql?callback=?',
        query = 'select * from html where url="{URL}" and xpath="*"';
    
    function isExternal(url) {
        return !exRegex.test(url) && /:\/\//.test(url);
    }
    
    return function(o) {
        
        var url = o.url;
        
        if ( /get/i.test(o.type) && !/json/i.test(o.dataType) && isExternal(url) ) {
            
            // Manipulate options so that JSONP-x request is made to YQL
            
            o.url = YQL;
            o.dataType = 'json';
            
            o.data = {
                q: query.replace(
                    '{URL}',
                    url + (o.data ?
                        (/\?/.test(url) ? '&' : '?') + jQuery.param(o.data)
                    : '')
                ),
                format: 'xml'
            };
            
            // Since it's a JSONP request
            // complete === success
            if (!o.success && o.complete) {
                o.success = o.complete;
                delete o.complete;
            }
            
            o.success = (function(_success){
                return function(data) {
                    
                    if (_success) {
                        // Fake XHR callback.
                        _success.call(this, {
                            responseText: (data.results[0] || '')
                                // YQL screws with <script>s
                                // Get rid of them
                                .replace(/<script[^>]+?\/>|<script(.|\s)*?\/script>/gi, '')
                        }, 'success');
                    }
                    
                };
            })(o.success);
            
        }
        
        return _ajax.apply(this, arguments);
        
    };
    
})(jQuery.ajax);

$(document).ready(init);