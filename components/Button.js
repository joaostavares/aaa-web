import React from "react"
import {motion} from "framer-motion";

function button() {
    return (<div className='flex justify-center items-center'>
        <ul className='w-[244px] sm:w-[360px]'>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.7
                    }
                },
            }}>
                <motion.li whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: .2
                    },
                }} className='text-xl'>
                    <a href='https://forms.gle/LdVJn5L6VSbkrrPz7'
                       target={'_blank'}
                       rel={'noreferrer'}
                       className='btn'
                    >
                        Votação Melhores 2022
                    </a>
                </motion.li>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.8
                    }
                },
            }}>
                <motion.li whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: .2
                    }
                }} className='text-xl'>
                    <a href='https://www.cheersapp.com.br/atl%C3%A9tica-inatel~196'
                       target={'_blank'}
                       rel={'noreferrer'}
                       className='btn'
                    >
                        Lojinha
                    </a>
                </motion.li>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.9
                    }
                },
            }}>
                <motion.li whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: .2
                    }
                }} className='text-xl'>
                    <a href='https://twitter.com/atleticainatel'
                       target={'_blank'}
                       rel={'noreferrer'}
                       className='btn'
                    >
                        Twitter
                    </a>
                </motion.li>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 1
                    }
                },
            }}>
                <motion.li whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: .2
                    }
                }} className='text-xl' >
                    <a href='https://www.facebook.com/AtleticaInatel'
                       target={'_blank'}
                       rel={'noreferrer'}
                       className='btn'
                    >
                        Facebook
                    </a>
                </motion.li>
            </motion.div>
        </ul>
    </div>);
}

export default button