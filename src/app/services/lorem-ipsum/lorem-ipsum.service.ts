import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoremIpsumService {
  constructor() {}

  public getDummyText(): string {
    return `Vestibulum justo libero, iaculis nec scelerisque eget, pellentesque ac leo. Sed hendrerit sodales sem, sed pulvinar dui feugiat vitae. Ut luctus ex ut quam fermentum, consequat tristique nibh consectetur. Nulla malesuada pretium faucibus. Sed luctus massa non ligula blandit, at luctus elit sollicitudin. Vivamus eu lorem a urna mattis consectetur. Phasellus sit amet commodo risus. Sed vel rhoncus nibh. Sed at viverra felis, in consectetur leo. Vivamus elementum congue placerat.
    
    Nam viverra lacinia finibus. Sed convallis justo sed metus facilisis, non bibendum nisl bibendum. Praesent ac justo et nisi maximus aliquet. Morbi urna mi, bibendum ut ex eu, aliquam feugiat ex. Nunc gravida lacinia sem, nec auctor dui congue ac. Duis non sem sed leo faucibus sagittis. Ut ex turpis, congue vel metus non, porta efficitur neque. Curabitur ac imperdiet metus. Praesent dictum dictum eleifend. Proin at nulla ut nisl porttitor elementum sed ac purus. Curabitur quam urna, congue vitae arcu non, porta maximus massa. Fusce iaculis lorem ut turpis tempus ultricies. In pellentesque nunc sed turpis iaculis hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    
    Fusce non nulla a nibh convallis facilisis a at justo. Aenean convallis luctus efficitur. Donec purus mauris, finibus sed rhoncus sit amet, facilisis vel ipsum. Maecenas et suscipit diam. Mauris ultricies viverra dolor, eget blandit leo porttitor sit amet. Vestibulum eu nisi non neque fermentum fermentum sed quis mi. Phasellus eu mattis nisl, in porttitor sem. Curabitur facilisis rutrum odio eget lacinia. Mauris nec risus nec tortor aliquet sagittis. Etiam eu maximus ex. Curabitur eu arcu ut tortor aliquam aliquam. Nunc sit amet aliquam dui, eu faucibus lorem. Quisque pretium non ligula non suscipit. Aliquam viverra turpis non rhoncus ultrices. Nulla sed massa elementum, tincidunt purus sagittis, mollis est.`;
  }
}
