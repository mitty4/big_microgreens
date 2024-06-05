import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
    public lists: any[] = [
      { question: 'What are the nutritional benefits of microgreens?',
        answer: 'Microgreens are packed with nutrients and often contain higher nutrient levels than mature leaves of the same plants. They are rich in vitamins, minerals, and antioxidants.'
      },
      { question: 'How should microgreens be stored?',
        answer: 'Microgreens should be stored in a sealed container in the refrigerator. They are best used fresh but can last up to a week.' },
      // { question: 'How do you grow microgreens at home?', 
      //   answer: 'To grow microgreens at home, follow these steps:'
      //   steps: [
      //     'Choose seeds specifically labeled for microgreens.',
      //     '',
      //     '',
      //     '',

      //   ]
      // },
      // { question: '', 
      //   answer: '' },
      // { question: '', 
      //   answer: '' },
      // { question: '', 
      //   answer: '' },
    ]
}
