export function createCloseButton() {
    const button = document.createElement("button");
    button.classList.add("modal__button");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("modal__button-svg");
    svg.setAttribute("width", "40");
    svg.setAttribute("height", "40");
    svg.setAttribute("viewBox", "0 0 40 40");

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M30 10L10 30");
    path1.setAttribute("stroke", "#181C29");
    path1.setAttribute("stroke-width", "2");
    path1.setAttribute("stroke-linecap", "round");

    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M10 10L30 30");
    path2.setAttribute("stroke", "#181C29");
    path2.setAttribute("stroke-width", "2");
    path2.setAttribute("stroke-linecap", "round");

    svg.append(path1, path2);
    button.appendChild(svg);

    return button;
}
