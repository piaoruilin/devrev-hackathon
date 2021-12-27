import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "doxide" is now active!');

	let disposable = vscode.commands.registerCommand('doxide.helloWorld', () => {
		vscode.window.showInformationMessage('Meow from Doxide!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
