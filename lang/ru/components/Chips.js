export default {
  header: 'Chip',
  headerText: 'Компонент `v-chip` используется для передачи небольших фрагментов информации. Используя свойство `close`, чип становится интерактивным, что позволяет взаимодействовать с пользователем.',
  components: ['v-chip'],
  examples: [{
    default: {
      header: 'По умолчанию',
      desc: 'Chips входят в 4 основных варианта. Обычный, со значком, с портретом и закрывающимся.',
      uninverted: true
    },
    colored: {
      header: 'цветной',
      desc: 'Любой цвет из палитры Material Design можно использовать для изменения цвета чипов.'
    },
    icon: {
      header: 'Иконка',
      desc: 'Chips могут использовать текст или любой значок, доступный в библиотеке шрифтов Material Icons.'
    },
    outline: {
      header: 'Контур',
      desc: 'Очерченные chips наследуют свой цвет границы от текущего цвета текста.'
    },
    label: {
      header: 'Метка',
      desc: 'В метки chips  используется border-radius `v-card`.'
    },
    closable: {
      header: 'Перекрываемый',
      desc: 'Закрытые chips можно контролировать с помощью v-model. Прослушайте событие `input`, если вы хотите узнать, когда chip был закрыт.',
      uninverted: true
    },
    inSelects: {
      header: 'В выборе',
      desc: 'Выбор позволяет использовать чипы для отображения выбранных данных.',
      uninverted: true
    }
  }],
  props: {
    close: 'Кнопка добавления удаления',
    disabled: 'Отключает Chip, что делает его недоступным',
    label: 'Удаляет края круга',
    outline: 'Удаляет фон и применяет цвет границы и текста',
    selected: 'Применяет цвет выделения к chip. В основном используется для отображения контекста выделения в `v-select`',
    small: 'Уменьшает размер чипа'
  }
}
