document.querySelectorAll("a").forEach(link => {

    const href = link.getAttribute("href");

    if (
        href &&
        !href.startsWith("#") &&
        !link.hasAttribute("target")
    ) {

        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.classList.add("page-exit");
            setTimeout(() => {
                window.location.href = href;
            }, 3000);
        });
    }
});