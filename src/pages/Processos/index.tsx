import React from 'react'
import Lottie from 'react-lottie';

import organic from '../../organic.json';
import minerals from '../../minerals.json'
import downArrow from '../../downArrow.json';
import leftArrow from '../../leftArrow.json';
import compost from '../../compost.json'
import centrifuga from '../../centrifuga.json'
import packing from '../../packing.json';
import rightArrow from '../../rightArrow.json';
import product from '../../product.json';

import { Container, ProcessContent, CompostagemContent, FinalProcessContent } from './styles';

export default function Processos() {

    const mineralsOptions = {
        loop: true,
        autoplay: true,
        animationData: minerals,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const organicOptions = {
        loop: true,
        autoplay: true,
        animationData: organic,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const downArrowOptions = {
        loop: true,
        autoplay: true,
        animationData: downArrow,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const leftArrowOptions = {
        loop: true,
        autoplay: true,
        animationData: leftArrow,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const centrifugaOptions = {
        loop: true,
        autoplay: true,
        animationData: centrifuga,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const compostOptions = {
        loop: true,
        autoplay: true,
        animationData: compost,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const packingOptions = {
        loop: true,
        autoplay: true,
        animationData: packing,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const rightArrowOptions = {
        loop: true,
        autoplay: true,
        animationData: rightArrow,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const productOptions = {
        loop: true,
        autoplay: true,
        animationData: product,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const styleCompost = {
    marginRight:"110px"
    }
    return (
        <div>
            <h1>Processos</h1>
            <Container><Lottie options={organicOptions} height={180}
                width={180} title="Orgânico" />
                <p>Material Orgânico</p>
                <Lottie options={mineralsOptions} height={180}
                    width={180} title="Mineral" />
                <p>Fonte Mineral</p>
            </Container>
            <ProcessContent>
                <Lottie options={downArrowOptions} height={180}
                    width={180} />
                <Lottie options={leftArrowOptions} height={180}
                    width={180} />
                <p>Adição de TCP</p>
            </ProcessContent>
            <CompostagemContent>
                <Lottie options={compostOptions} height={180}
                    width={180} />
                <figcaption style = {styleCompost}  >Compostagem</figcaption>
            </CompostagemContent>
            <ProcessContent>
                <Lottie options={downArrowOptions} height={180}
                    width={180} />
                <Lottie options={leftArrowOptions} height={180}
                    width={180} />
                <p>Adição de Micronutrientes</p>
            </ProcessContent>
            <CompostagemContent>
                <Lottie options={centrifugaOptions} height={180}
                    width={180} />
                <figcaption >Granulação/Peletização</figcaption>
                <Lottie options={downArrowOptions} height={180}
                    width={180} />
            </CompostagemContent>

            <FinalProcessContent>
                <Lottie options={packingOptions} height={180}
                    width={180} />
                    <p>Embalagem</p>
                    <Lottie options={rightArrowOptions} height={180}
                    width={180} />
                <Lottie options={productOptions} height={180}
                    width={180} />
                    <p>Produto Final</p>
            </FinalProcessContent>
        </div>
    )
}
