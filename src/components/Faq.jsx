import React from 'react';
import {motion} from "framer-motion"
import { fadeIn } from '../variants';
import { Accordion } from "radix-ui";
import { ChevronDownIcon } from '@radix-ui/themes';

const FAQ = () => {

    const faqs = [
        {
            question: 'Comment créer un compte ?',
            answer: 'Pour créer un compte, cliquez sur le bouton "S\'inscrire" en haut à droite et suivez les instructions.',
            value: 'item-1'
        },
        {
            question: 'Comment postuler à un job ?',
            answer: 'Après avoir créé un compte, allez dans la section "Recherche" de votre dashboard et remplissez l\'intitulé du job qui vous correspond. Également, vous pouvez vous rendre dans "Entreprises", rechercher une entreprise et postuler à un job.',
            value: 'item-2'
        },
        {
            question: 'Comment publier une offre de job ?',
            answer: 'Après avoir créé un compte, allez dans la section "Job" de votre dashboard et remplissez les détails de votre offre.',
            value: 'item-3'
        },
        {
            question: 'Comment trouver des freelances ?',
            answer: 'Utilisez la barre de recherche en haut de la page pour trouver des freelances en fonction de vos besoins.',
            value: 'item-4'
        },
        {
            question: 'Comment contacter un freelance ?',
            answer: 'Cliquez sur le profil du freelance et utilisez le bouton "Contacter" pour lui envoyer un message.',
            value: 'item-5'
        },
    ];

    return (
        <div id='faq' className='px-auto pb-8 text-white bg-green2 min-h-[450px] flex justify-center rounded-tl-[50px]'>
            <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:true, amount: 0.7}}
                className='max-w-[1240px] content-center my-auto'>
                <h2 className ='font-bold text-4xl text-yellow justify-center flex px-auto w-full my-8 gap-2'>FAQ<span className='text-white'>(Foire aux questions)</span></h2>
                <Accordion.Root 
                    type='single'
                    collapsible
                    className='w-full sm:w-[500px] md:w-[800px] xl:w-[1000px] px-3 '>
                    {faqs.map((faq, index) => (
                        <Accordion.Item key={index} value={faq.value} className='AccordionItem'>
                            <Accordion.Trigger className='AccordionTrigger'>
                                <h3>{faq.question}</h3>
                                <ChevronDownIcon className='AccordionChevron' aria-hidden width={10} height={10}/>
                            </Accordion.Trigger>
                            <Accordion.Content className='AccordionContent'>
                                <p className='my-1'>{faq.answer}</p>
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </motion.div>
        </div>
    );
};

export default FAQ;