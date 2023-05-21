//MainAxisAlignment.center
//crossAxisAlignment: CrossAxisAlignment,
//////////////////////////////////////////

function EventRoutines() {

}
var eventRoutines = [];
/////////////
function Random() {
    return Math.ceil(Math.random() * 1000000);
}
//////////////////////////
function xAxisAlignmentDelegate() {
    return {
        start: 0,
        center: 1,
        end: 2,
        spaceBetween: 3,
        spaceAround: 4,
        spaceEvenly: 5

    }
}
function yAxisAlignmentDelegate() {
    return {
        start: 0,
        center: 1,
        end: 2,
        stretch: 3

    }
}
function colorsDelegate() {
    return {
        black: "black",
        white: "white",
        red: "red",
        blue: "blue",
        green: "green",
        purple: "purple",
        yellow: "yellow",
        transparent: "transparent"
    };
}

function fontWeightDelegate() {
    return {
        bold: "bold",
        bolder: "bolder",
        lighter: "lighter",
        w100: 100,
        w200: 200,
        w300: 300,
        w400: 400,
        w500: 500,
        w600: 600,
        w700: 700,
        w800: 800,
        w900: 900
    };
}
///////////////////////////////////////////
function edgeInsertsDelegate() {
    return {
        all: function (padding) {
            return {
                right: padding,
                left: padding,
                top: padding,
                bottom: padding
            }
        },
        only: function ({
            right = 0,
            left = 0,
            top = 0,
            bottom = 0
        } = {}) {
            return {
                right: right,
                left: left,
                top: top,
                bottom: bottom
            }
        },
        symmetric: function ({ horizontal = 0, vertical = 0 } = {}) {
            return {
                right: horizontal,
                left: horizontal,
                top: vertical,
                bottom: vertical
            }
        }
    }
}
/////////////////////////////////

function borderRadiusDelegate() {
    return {
        all: function (padding) {
            return {
                right: padding,
                left: padding,
                top: padding,
                bottom: padding
            }
        },
        only: function ({
            right = 0,
            left = 0,
            top = 0,
            bottom = 0
        } = {}) {
            return {
                right: right,
                left: left,
                top: top,
                bottom: bottom
            }
        },
    }
}
////////////////
function Border({ width = 0, color = Colors.transparent, } = {}) {
    return {
        width: width,
        color: color
    }
}
function Padding({ width = 0, height = 0, color = Colors.transparent, padding = EdgeInsets.all(0), child = "" }) {
    return '<div style="padding: ' + padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px ' + padding.left + 'px;">' + child + '</div>';
}

function GestureDetector({
    onTap = null,
    onDoubleTap = null,
    onHover = null,
    onLeave = null,
    child = ""
} = {}) {
    var randomno = Random();
    var routineid = "gesture-event-" + randomno;
    eventRoutines.push({
        routine_id: routineid, events: [
            { owner: "click", routine: onTap },
            { owner: "dblclick", routine: onDoubleTap },
            { owner: "mouseover", routine: onHover },
            { owner: "mouseout", routine: onLeave },
        ], routine: onTap
    });
    return '<span id="' + routineid + '" style="cursor: pointer;">' + child + '</span>';
}

///////////////////////////////////////
function fontStyleDelegate() {
    return {
        Normal: "normal",
        Italic: "italic",
        Oblique: "oblique"
    };
}

function colorDelegate(color) {

}
var Colors = colorsDelegate();
///////////////
var MainAxisAlignment = xAxisAlignmentDelegate();
var CrossAxisAlignment = yAxisAlignmentDelegate();
var FontWeight = fontWeightDelegate();
var FontStyle = fontStyleDelegate();
var EdgeInsets = edgeInsertsDelegate();
var BorderRaduis = borderRadiusDelegate();
///////////////////////////////////////////////////////
function BoxDecoration({ borderRaduis = BorderRaduis.all(0), border = Border() } = {}) {
    return {
        borderRaduis: borderRaduis,
        border: border
    };
}

/////////////
function Container({ color = Colors.transparent, decoration = BoxDecoration(), margin = EdgeInsets.all(0), padding = EdgeInsets.all(0), child = "" }) {
    var width = width == 0 ? "" : 'width: ' + width + 'px;';
    var height = height == 0 ? "" : 'height: ' + height + 'px;'

    return '<div style="border-radius: ' + decoration.borderRaduis.top + 'px ' + decoration.borderRaduis.right + 'px ' + decoration.borderRaduis.bottom + 'px ' + decoration.borderRaduis.left + 'px;border: ' + decoration.border.width + 'px solid ' + decoration.border.color + ";" + width + height + 'background-color: ' + color + ';margin: ' + margin.top + 'px ' + margin.right + 'px ' + margin.bottom + 'px ' + margin.left + 'px; padding: ' + padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px ' + padding.left + 'px;">' + child + '</div>';
}
////
function TextStyle({ backgroundColor = Colors.transparent, color = Colors.black, fontSize = 16.0, fontFamily = 'Arial, Helvetica, sans-serif', fontWeight = FontWeight.w400, fontStyle = FontStyle.Normal } = {}) {
    return 'background-color: ' + backgroundColor + ';color: ' + color + '; font-size: ' + fontSize + 'px;font-family: ' + fontFamily + ';font-weight: ' + fontWeight + ';font-style: ' + fontStyle;
}

function SizedBox({ width = 0, height = 0, child = "" } = {}) {
    var width = width == 0 ? "" : 'width: ' + width + 'px;';
    var height = height == 0 ? "" : 'height: ' + height + 'px;'
    return '<div style="' + width + height + '">' + child + '</div>';
}


function Text(text, { style = "" } = {}) {
    return '<div style="' + style + '">' + text + '</div>';
}



function NavBar() {

}

function Footer() {

}

function TabBar() {

}

function TabBarView() {

}

function Tab() {

}
function Column({ mainAxisAlignment = MainAxisAlignment.start, crossAxisAlignment = CrossAxisAlignment.center, children = [] } = {}) {
    var dataString = "";
    /////////////////////////////////////
    for (i = 0; i < children.length; i++) {
        dataString += children[i];
    }
    /////////////////////////////////
    var xJustfyContent = "start";
    //////////////////////////////
    switch (mainAxisAlignment) {
        case MainAxisAlignment.center:
            // code block
            xJustfyContent = "center";
            break;
        case MainAxisAlignment.end:
            // code block
            xJustfyContent = "end";
            break;
        case MainAxisAlignment.spaceBetween:
            // code block
            xJustfyContent = "space-between";
            break;
        case MainAxisAlignment.spaceAround:
            // code block
            xJustfyContent = "space-around";
            break;
        case MainAxisAlignment.spaceEvenly:
            // code block
            justfyContent = "space-evenly";
            break;
        default:
            xJustfyContent = "start";
        // code block
    }
    ////////////////
    /////////////////////////////////
    var yJustfyContent = "start";
    //////////////////////////////
    switch (crossAxisAlignment) {
        case CrossAxisAlignment.center:
            // code block
            yJustfyContent = "center";
            break;
        case CrossAxisAlignment.end:
            // code block
            yJustfyContent = "end";
            break;
        case CrossAxisAlignment.stretch:
            // code block
            yJustfyContent = "stretch";
            break;
        default:
            yJustfyContent = "start";
        // code block
    }
    return '<div style="width: 100%;display: flex; flex-direction: column;justify-content: ' + xJustfyContent + '; align-items: ' + yJustfyContent + ';" class="column">'
        + dataString
        + '</div>';
}



function Row({ mainAxisAlignment = MainAxisAlignment.start, crossAxisAlignment = CrossAxisAlignment.start, children = [] } = {}) {
    var dataString = "";
    /////////////////////////////////////
    for (i = 0; i < children.length; i++) {
        dataString += children[i];
    }
    /////////////////////////////////
    var xJustfyContent = "start";
    //////////////////////////////
    switch (mainAxisAlignment) {
        case MainAxisAlignment.center:
            // code block
            xJustfyContent = "center";
            break;
        case MainAxisAlignment.end:
            // code block
            xJustfyContent = "end";
            break;
        case MainAxisAlignment.spaceBetween:
            // code block
            xJustfyContent = "space-between";
            break;
        case MainAxisAlignment.spaceAround:
            // code block
            xJustfyContent = "space-around";
            break;
        case MainAxisAlignment.spaceEvenly:
            // code block
            justfyContent = "space-evenly";
            break;
        default:
            xJustfyContent = "start";
        // code block
    }
    ////////////////
    /////////////////////////////////
    var yJustfyContent = "start";
    //////////////////////////////
    switch (crossAxisAlignment) {
        case CrossAxisAlignment.center:
            // code block
            yJustfyContent = "center";
            break;
        case CrossAxisAlignment.end:
            // code block
            yJustfyContent = "end";
            break;
        case CrossAxisAlignment.stretch:
            // code block
            yJustfyContent = "stretch";
            break;
        default:
            yJustfyContent = "start";
        // code block
    }
    return '<div style="width: 100%;display: flex; flex-direction: row;justify-content: ' + xJustfyContent + '; align-items: ' + yJustfyContent + ';" class="column">'
        + dataString
        + '</div>';
}


function EazzeyApp(ctx, { navbar = {}, body = "" } = {}) {
    this.context = document.querySelector(ctx);
    this.routes = [];
    //////////////////////
    this.RenderUI = function () {
        this.context.innerHTML = body;
        /////////////////////////////////////
        this.makeEventRoutines();
    }
    this.getInitial = function () {

    }
    this.makeEventRoutines = function () {
        eventRoutines.forEach((eventRoutine) => {
            var routine = document.querySelector("#" + eventRoutine.routine_id);
            eventRoutine.events.forEach((event) => {
                if (event.routine != null) {
                    routine.addEventListener(event.owner, event.routine);
                }
                // console.log(event);
            });
        })

    }
    this.initRoutes = function () {
        ////
    }
    this.AddRoutes = function (routes) {
        this.routes = routes;
    }
    this.AddRoute = function (route) {
        this.routes.push(route)
    }

}


function EventHandler(evenT) {

    var code = document.querySelector("#" + evenT).getAttribute("data-code");
    // eval(code);
    // console.log(code);
}