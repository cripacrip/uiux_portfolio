const anchor = document.querySelector(a.nav__link)

for(let anchor of anchors) {
    anchor.addEvendListener('click', function(e) {
        e.preventDefault()

        const blockID = anchor.getAtribute('href')

        document.querySelector(blockID).scrollIntoView({
            behvior: 'smooth',
            block: 'start'
        })
    })
}