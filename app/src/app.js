import React, { Component } from 'react';
import './app.css';

import Chat from './chat';
import { ChatMessage } from './chat';

class App extends Component {
    handleSend = (userInput) => {
        console.log('Need to send message: ' + userInput);
    }

    render() {
        let messages = [
            {
                'from': 'me',
                'text': 'Hi.',
            },
            {
                'from': 'her',
                'text': 'Hello.',
            },
            {
                'from': 'me',
                'text': 'How are you?',
            },
            {
                'from': 'her',
                'text': 'I\'m good. How about you?',
            },
            {
                'from': 'me',
                'text': 'I\'m fine.',
            },
            {
                'from': 'her',
                'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sem lacinia, placerat metus non, lobortis lectus. Morbi efficitur sem nec ex placerat, tempus suscipit tellus venenatis. Donec convallis felis nec nibh dictum, eget posuere nisi laoreet. In at dolor lorem. Suspendisse nec nulla id justo accumsan porta at ac nunc. Duis sodales nisl eu elementum accumsan. Sed lacinia sollicitudin massa, in congue metus malesuada a. Nam convallis vulputate erat, ac vehicula risus laoreet nec. Nam viverra laoreet egestas. Integer volutpat semper nunc.',
            },
            {
                'from': 'me',
                'text': 'Integer consequat efficitur pretium. Donec cursus, nisl et feugiat vehicula, lorem neque fringilla augue, quis scelerisque sapien neque scelerisque magna. Aliquam facilisis, turpis gravida luctus gravida, ipsum ex rutrum massa, quis scelerisque elit metus id lorem. Integer in aliquam est. In ultrices neque mauris, eu tristique sem eleifend commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ac aliquam erat. Sed faucibus turpis eget elit facilisis ornare. Vestibulum sem magna, pulvinar sit amet magna id, ultrices convallis nulla. Duis lorem urna, varius in fringilla et, aliquam et lorem. In et feugiat urna. Mauris venenatis consectetur eros at efficitur. Nullam ut faucibus erat. Cras congue a arcu a blandit.',
            },
            {
                'from': 'me',
                'text': 'Nunc eu nibh bibendum, porttitor urna eu, consequat dui. Sed laoreet massa id accumsan venenatis. Nunc lacinia ipsum tellus, at accumsan ligula gravida in. Donec at porta ipsum. Suspendisse lobortis sapien in ex egestas eleifend. Morbi cursus dapibus lorem nec feugiat. Sed vel blandit neque. Sed vestibulum blandit velit id semper. Phasellus risus eros, imperdiet sed tempor vel, facilisis quis orci. Nullam blandit bibendum ultrices. Nunc rhoncus est a fringilla imperdiet. Mauris pellentesque ex sit amet posuere vestibulum. Curabitur massa orci, malesuada vehicula arcu vitae, volutpat ultricies diam.',
            },
            {
                'from': 'her',
                'text': 'Aliquam luctus nunc metus, sit amet dictum justo sagittis ac. Nulla sit amet turpis sem. Curabitur dui quam, pellentesque eget pharetra quis, molestie vel orci. Ut a ex at sapien accumsan congue in non nulla. Sed fermentum posuere lacus, nec aliquet elit porttitor et. Aenean purus justo, aliquam in aliquam ac, laoreet dignissim risus. Vivamus ipsum lorem, porta sed mollis vitae, rutrum in urna. Fusce nec diam sagittis, semper arcu vel, consectetur libero. Integer consectetur erat id odio venenatis, at consequat erat aliquet. Donec aliquam urna at eros porttitor, id ornare libero blandit. Vestibulum tempus interdum risus, in finibus tortor hendrerit sit amet. Aenean non consequat velit, ultrices semper sapien. Curabitur sed eros sed neque congue faucibus id at lorem. Curabitur aliquet vitae tortor non mollis. Nunc lobortis tellus in nisl mattis, vel vestibulum tortor ultrices. Maecenas aliquet mi ac est suscipit efficitur.',
            },
        ];

        const messageElements = messages.map((msg, i) => <ChatMessage
            key={i}
            fromMe={msg.from === 'me'}
        >{msg.text}</ChatMessage>);

        return <div className="App">
            <Chat
                messages={messageElements}
                onSend={this.handleSend}
            />
        </div>;
    }
}

export default App;
