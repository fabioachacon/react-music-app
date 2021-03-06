export const slidSideBar = {
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .5,
            ease: 'easeOut',
            when: 'beforeChildren',
    
        }
    },
    closed: {
        opacity: 0,
        x: '-100%',
        transition: {
            duration: 0.5
        }
    } 
}

export const slidSongs = {
    hidden: {
        x: -50,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    }
}


export const scaleUp = {
    scale: 1.2,
    background: 'lightgray', 
    transition: {
        duration: .25, 
        ease: 'easeOut'
    }
}


export const borderAnimHover = {
    borderRadius: '20%', 
    scale: 1.2,
    transition: {
        type: 'spring',
        duration: 0.2,
        stiffness: 90
    }
}
