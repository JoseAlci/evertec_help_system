import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-tokens-format',
  imports: [CommonModule],
  templateUrl: './tokens-format.component.html',
  styleUrl: './tokens-format.component.css'
})
export class TokensFormatComponent {

  result: string = "";


  actions_list = [
    { value: "parse_highlighting_spaces", label: "Parsear realzando espacios"},
    { value: "parse_no_highlighting_spaces", label: "Parsear sin realzar espacios"}
  ]


  process_tokens(value_select: string, value_token: string) {

    this.result = "";
      
    if (value_select === "parse_highlighting_spaces") {
        this.parse_highlighting_spaces(value_token.replace(/(\r\n|\n|\r)/g, ''));
      }

      if (value_select === "parse_no_highlighting_spaces") {
        this.parse_no_highlighting_spaces(value_token.replace(/(\r\n|\n|\r)/g, ''));
      }

  }



  //----------------------------------------FUNCTIONS----------------------------------------

  parse_highlighting_spaces(original_token: string): void {

    let current_parsed = "NOTA: En 'lista completa' y en 'token content', los signos '%' al comienzo y final, marcan el comienzo y final del mismo, NO forman parte del token\n\n";
    
    const field_length: string = original_token.split("&")[0];

    const field_content: string = original_token.split("&")[1]

    const tokens_length: string = field_content.split("!")[0];

    const tokens_list: string[] = field_content.split("!").slice(1);


    const lista_completa: string = `lista completa: %&${field_content}%`;

    current_parsed = current_parsed + lista_completa + "\n\n\n";

    for (let i = 0; i < tokens_list.length; i++) {

      const token_content = tokens_list[i].slice(1);
            
      const token_id = token_content.slice(0,2);
      const token_length = token_content.slice(2,7);
      const token_inf = token_content.slice(8);

      const register = `------------------------------------- TOKEN ${token_id}-------------------------------------
${token_content}

token id: ${token_id}
token length: ${token_length}
token content: %${token_inf.replaceAll(" ", "¦")}%`


      current_parsed = current_parsed + register + "\n\n\n";

    }

    this.result = current_parsed;

  }


  parse_no_highlighting_spaces(original_token: string): void {

    let current_parsed = "NOTA: En 'lista completa' y en 'token content', los signos '%' al comienzo y final, marcan el comienzo y final del mismo, NO forman parte del token\n\n";
    
    const field_length: string = original_token.split("&")[0];

    const field_content: string = original_token.split("&")[1]

    const tokens_length: string = field_content.split("!")[0];

    const tokens_list: string[] = field_content.split("!").slice(1);

    const lista_completa: string = `lista completa: %&${field_content}%`;

    current_parsed = current_parsed + lista_completa + "\n\n\n";

    for (let i = 0; i < tokens_list.length; i++) {

      const token_content = tokens_list[i].slice(1);
            
      const token_id = token_content.slice(0,2);
      const token_length = token_content.slice(2,7);
      const token_inf = token_content.slice(8);

      const register = `------------------------------------- TOKEN ${token_id}-------------------------------------
${token_content}

token id: ${token_id}
token length: ${token_length}
token content: %${token_inf}%`


      current_parsed = current_parsed + register + "\n\n\n";

    }

    this.result = current_parsed;

  }

}
