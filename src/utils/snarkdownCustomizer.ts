import snarkdown from "snarkdown";

const customSnarkdown = (markdown: string) => {
    console.log(markdown);
    //if tagged with $$ then change to <sup>{digit}</sup>
    markdown = markdown.replace(/\$\$(\d+)\$\$/g, "<sup>$1</sup>");

    //if tagged with [](link**) then change to <a href="{link}">{text}</a>
    markdown = markdown.replace(/\[([^\]]+)\]\(([^)]+)\*\*\)/g, "<a href=\"$2\" target=\"_blank\">$1</a>");

    return snarkdown(markdown);
};

export default customSnarkdown;