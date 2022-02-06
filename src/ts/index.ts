
import { this_too }  from './other_file';
import { re_render } from './ui';





function bootstrap() {
  re_render({ name: 'Joe' });
  console.log('bootstrapped!');
}





export { bootstrap, this_too };
