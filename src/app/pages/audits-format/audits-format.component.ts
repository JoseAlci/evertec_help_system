import { Component } from '@angular/core';

@Component({
  selector: 'app-audits-format',
  imports: [],
  templateUrl: './audits-format.component.html',
  styleUrl: './audits-format.component.css'
})
export class AuditsFormatComponent {

  result: string = "";

  //----------------------------------------FUNCTIONS----------------------------------------

  filter(original_text: string, text_search: string): void{

    this.result = "";

    const text_line_for_line = original_text.split("\n");

    let list_of_matches: any[] = [];

    text_line_for_line.forEach( (line, index) => {
      
      if( line.includes(text_search) ){

        list_of_matches.push(index+1);

      }

    });
    
    if( (list_of_matches.length > 0) && !(text_search == "") ){

      let leaked_text = "Tarjeta: " + text_search + "\n";
      
      const first_appearance = list_of_matches[0]-1
      const last_appearance = list_of_matches[list_of_matches.length-1]-1
      let initial_index = 0;
      let final_index = 0;

      for(let index = first_appearance; index >=0; index--){

          if( text_line_for_line[index].includes("Date & Time") ){

              initial_index = index;

              break;

          }

      }

      for( let index = last_appearance; index < text_line_for_line.length; index++ ){

          if( text_line_for_line[index].includes("Date & Time") ){

              final_index = index-1;

              break;

          }

      }

      for(let index = initial_index; index <= final_index; index++){

          leaked_text = leaked_text + "\n" + text_line_for_line[index];

      }

      this.result = leaked_text;

    }

  }

  copyToClipboard(text: string) {

    navigator.clipboard.writeText(text).then(() => {

      alert('Texto copiado al portapapeles');

    }).catch(err => {

      console.error('Error al copiar: ', err);

    });

  }

}
