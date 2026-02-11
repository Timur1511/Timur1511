//"use strict"

const header = document.querySelector(".mainHeader")
const aside = document.querySelector(".sidebar")
const copyright = document.querySelector(".copyright")
const head = document.querySelector("#head")

header.innerHTML = `
    <div class="logo">
        <svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#000000" stroke-width="51.2"> <g id="7935ec95c421cee6d86eb22ecd13295e"> <path style="display: inline;" d="M106.669,52.438c0,0,102.123-55.525,189.491,11.392l-48.896,167.995 c0,0-54.756-37.67-95.361-33.602c-40.605,4.079-94.13,23.508-94.13,23.508L106.669,52.438z M0.5,420.566 c22.54-11.653,56.372-17.559,95.35-20.823c39.011-3.255,93.91,32.468,93.91,32.468l49.401-169.776 c-7.817-5.618-44.168-30.094-89.666-33.348c-45.52-3.255-100.354,22.243-100.354,22.243L0.5,420.566z M216.104,447.165 c8.928,3.519,38.22,31.38,86.972,33.854c48.763,2.419,102.541-22.749,102.541-22.749s47.894-167.6,48.861-168.249 c0.33-0.176-0.604,0.484-0.968,0.649c-45.596,17.845-68.872,20.506-102.496,21.309c-34.141,0.824-86.269-33.095-86.269-33.095 L216.104,447.165z M322.01,81.575l-48.995,167.017c0,0,39.803,39,95.867,35.768c56.098-3.267,86.532-20.945,93.976-23.442 L511.5,92.416c0,0-64.606,26.982-106.851,22.09C362.384,109.613,336.094,91.657,322.01,81.575z"> </path> </g> </g><g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd13295e"> <path style="display: inline;" d="M106.669,52.438c0,0,102.123-55.525,189.491,11.392l-48.896,167.995 c0,0-54.756-37.67-95.361-33.602c-40.605,4.079-94.13,23.508-94.13,23.508L106.669,52.438z M0.5,420.566 c22.54-11.653,56.372-17.559,95.35-20.823c39.011-3.255,93.91,32.468,93.91,32.468l49.401-169.776 c-7.817-5.618-44.168-30.094-89.666-33.348c-45.52-3.255-100.354,22.243-100.354,22.243L0.5,420.566z M216.104,447.165 c8.928,3.519,38.22,31.38,86.972,33.854c48.763,2.419,102.541-22.749,102.541-22.749s47.894-167.6,48.861-168.249 c0.33-0.176-0.604,0.484-0.968,0.649c-45.596,17.845-68.872,20.506-102.496,21.309c-34.141,0.824-86.269-33.095-86.269-33.095 L216.104,447.165z M322.01,81.575l-48.995,167.017c0,0,39.803,39,95.867,35.768c56.098-3.267,86.532-20.945,93.976-23.442 L511.5,92.416c0,0-64.606,26.982-106.851,22.09C362.384,109.613,336.094,91.657,322.01,81.575z"> </path> </g> </g></svg>
    </div>
    <div class="headerText">
        Introduction to Windows Expirience
    </div>
    <div class="headerButtons">
        <a href="https://google.com">
        <svg width="48px" height="48px" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(3.5199999999999996,3.5199999999999996), scale(0.78)"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="3.4559999999999995" fill="#ff0000" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-204.000000, -1035.000000)" fill="#000000"> <path d="M224.95,1046.05 C224.559,1045.66 223.926,1045.66 223.536,1046.05 L220,1049.59 L216.464,1046.05 C216.074,1045.66 215.441,1045.66 215.05,1046.05 C214.66,1046.44 214.66,1047.07 215.05,1047.46 L218.586,1051 L215.05,1054.54 C214.66,1054.93 214.66,1055.56 215.05,1055.95 C215.441,1056.34 216.074,1056.34 216.464,1055.95 L220,1052.41 L223.536,1055.95 C223.926,1056.34 224.559,1056.34 224.95,1055.95 C225.34,1055.56 225.34,1054.93 224.95,1054.54 L221.414,1051 L224.95,1047.46 C225.34,1047.07 225.34,1046.44 224.95,1046.05 L224.95,1046.05 Z M234,1063 C234,1064.1 233.104,1065 232,1065 L208,1065 C206.896,1065 206,1064.1 206,1063 L206,1039 C206,1037.9 206.896,1037 208,1037 L232,1037 C233.104,1037 234,1037.9 234,1039 L234,1063 L234,1063 Z M232,1035 L208,1035 C205.791,1035 204,1036.79 204,1039 L204,1063 C204,1065.21 205.791,1067 208,1067 L232,1067 C234.209,1067 236,1065.21 236,1063 L236,1039 C236,1036.79 234.209,1035 232,1035 L232,1035 Z" id="cross-square" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
        </a>
    </div>
`

aside.innerHTML = `
    <div class="sidebarTitle">Основное
        <div class="sidebarContent">
        <a href="index.html" class="sidebarContentNotSelected">Введение</a>
        </div>
    </div>
    
    <div class="sidebarTitle">Сайт</div>                 
    <div class="sidebarContent">
        <a href="aboutWebsite.html" class="sidebarContentNotSelected">О сайте</a>
    </div>
    <div class="sidebarContent">
        <a href="versions.html" class="sidebarContentNotSelected">Версии</a>
    </div>
                            
    <div class="sidebarTitle">Другое</div>
    <div class="sidebarContent">
        <a href="other.html" class="sidebarContentNotSelected">Прочее</a>
    </div>
    <div class="sidebarContent">
        <a href="roadmap.html" class="sidebarContentNotSelected">Roadmap</a>
    </div>
`

copyright.innerHTML = `
    Copyright © Бла-бла 2025-2026 Gataullin T. R. (Timur1511 | Dummy)
`
