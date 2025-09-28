import 'package:flutter/material.dart';

class ProjectScreen extends StatelessWidget {
    final projects = [
        {'name': 'Budowa kurnika', 'tasks': 4},
        {'name': 'Malowanie dachu', 'tasks': 2}
    ];

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title: Text('Projekty'),
            ),
            body: ListView.builder(
                itemCount: projects.length,
                itemBuilder: (context, index) {
                    final project = projects[index];
                    return ListTile(
                        title: Text(project['name']!),
                        subtitle: Text('${project['tasks']} zadania'),
                        onTap: () {
                            // Navigate to project details
                        },
                    );
                },
            ),
            floatingActionButton: FloatingActionButton(
                onPressed: () {
                    // Add new project
                },
                child: Icon(Icons.add),
            ),      
        );
    }
}