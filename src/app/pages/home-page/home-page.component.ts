import { afterNextRender, afterRender, ChangeDetectionStrategy, Component, effect, OnInit, signal } from '@angular/core';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')} `,
    'color: #bada55'
  );
}

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent implements OnInit {

  traditionalProperty = "Sebastián"

  signalProperty = signal("Sebastián")

  constructor() {
    log('constructor llamado en Home Page')
    setTimeout(()=>{
      this.signalProperty.set('Marco')
    }, 2000)
  }

  changeTraditional(){
    this.traditionalProperty = 'Sebastián Hernández'
  }

  changeSignal() {
    this.signalProperty.set('Sebastián Hernández')
  }

  basicEffect = effect((onCleanup) => {
    log('effect', " Disparar efectos secundarios")

    onCleanup(() => {
      log('onCleanup', " Se Ejecuta cuando el efecto se va a destruir")
    })

  })

  ngOnInit() {
    log('ngOnInit', "	Runs once after Angular has initialized all the component's inputs. ")
  }
  ngOnChanges() {
    log('ngOnChanges', "	Runs every time the component's inputs have changed. ")
  }
  ngDoCheck() {
    log('ngDoCheck', "	Runs every time this component is checked for changes. ")
  }
  ngAfterContentInit() {
    log('ngAfterContentInit', "	Runs once after the component's content has been initialized. ")
  }
  ngAfterContentChecked() {
    log('ngAfterContentChecked', "	Runs every time this component content has been checked for changes. ")
  }
  ngAfterViewInit() {
    log('ngAfterViewInit', "	Runs once after the component's view has been initialized. ")
  }
  ngAfterViewChecked() {
    log('ngAfterViewChecked', "	Runs every time the component's view has been checked for changes. ")
  }
  ngOnDestroy() {
    log('ngOnDestroy', "	Runs once before the component is destroyed.")
  }

  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRender', "  	Runs once the next time that all components have been rendered to the DOM..")
  })

  afterRenderEffect = afterRender(() => {
    log('afterRender', "  	Runs every time all components have been rendered to the DOM..")
  })

}
