import backgroundTwo from '../../../assets/images/background/bg2.png';
import vader from '../../../assets/images/elements/PikPng.png';

import Planet from '../../../assets/images/elements/planet.png';



let TextContent = `
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit </br></br>Quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
`

let HomeSectionTwo = `
    <section id="section-two" class="section background--two" style="background-image: url(${backgroundTwo})">
        <div class="container block-section">
            <div class="block-section--two">
                <img src="${vader}" alt="Vader">
                <div class="text-block--two">
                    <p>
                        ${TextContent}
                    </p>
            </div>
        </div>
        <div class="block-section">
            <div class="footer-contain">
                <p>
                    Star Wars - este é um exemplo criado para o Modulo de boas práticas.
                </p>
                <img src="${Planet}" alt="Vader" width="180px" height="auto">
            </div>  
        </div>
       
    </section>
`   
export default HomeSectionTwo;