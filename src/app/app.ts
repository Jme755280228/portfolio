import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isMenuOpen = false;

  user = {
    name: 'Aung Kyaw Kyaw',
    title: 'Web Developer',
    bio: 'I am a passionate web developer with experience in building modern web applications using Angular, Node.js, and other JavaScript frameworks.',
    profileImage: 'assets/images/profile.jpg',
  };

  projects = [
    {
      id: 1,
      name: 'E-commerce Website',
      description: 'A modern e-commerce platform with a focus on user experience and fast performance.',
      image: 'assets/images/eco.jpeg',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      link: '#',
    },
    {
      id: 2,
      name: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills, projects, and professional experience.',
      image: 'assets/images/portfolio.jpeg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
    },
    {
      id: 3,
      name: 'Task Manager App',
      description: 'A responsive web application to manage your daily tasks, with features like task creation, editing, and deletion.',
      image: 'assets/images/task.jpeg',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      link: '#',
    },
  ];

  skills = ['Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git', 'Docker'];

  contact = {
    email: 'aungkyawkyaw@example.com',
    phone: '09-123456789',
    linkedin: 'https://www.linkedin.com/in/aungkyawkyaw',
    github: 'https://github.com/aungkyawkyaw',
  };

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

