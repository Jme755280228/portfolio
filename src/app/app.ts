// app.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  // Fake Data
  user = {
    name: 'Aung Kyaw Kyaw',
    title: 'Web Developer',
    bio: 'I am a passionate web developer with experience in building modern web applications using Angular, Node.js, and other JavaScript frameworks.',
    profileImage: 'https://via.placeholder.com/150', // placeholder image
  };

  projects = [
    {
      id: 1,
      name: 'E-commerce Website',
      description: 'A full-stack e-commerce platform with a modern user interface, shopping cart functionality, and secure payment gateway integration.',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      image: 'https://via.placeholder.com/300x200?text=E-Commerce',
      link: '#'
    },
    {
      id: 2,
      name: 'Task Management App',
      description: 'A responsive task management application that helps users organize their daily tasks with features like task creation, editing, and deletion.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      image: 'https://via.placeholder.com/300x200?text=Task+App',
      link: '#'
    },
    {
      id: 3,
      name: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills, projects, and professional experience. Built with a clean and minimalistic design.',
      technologies: ['Angular', 'HTML', 'CSS'],
      image: 'https://via.placeholder.com/300x200?text=Portfolio',
      link: '#'
    },
  ];

  skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript',
    'Angular', 'Node.js', 'Express', 'MongoDB',
    'REST APIs', 'Git', 'GitHub'
  ];

  contact = {
    email: 'aungkyawkyaw@example.com',
    phone: '09-123456789',
    linkedin: 'https://www.linkedin.com/in/aungkyawkyaw',
    github: 'https://github.com/aungkyawkyaw'
  };
}

