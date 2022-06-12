import { Component, OnInit } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 0,
      name: 'Spense.com',
      description:
        "Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc",
      image: './assets/images/Spense.png',
    },
    {
      id: 1,
      name: 'YelpCamp.com',
      description:
        "Allowing backpack travelrs to perfectly plan their trip through an open-source platform similar to TripAdivsor. Within over 1m MAU, YelpCamp has been the crowd's favourite in 2021.",
      image: './assets/images/YelpCamp.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
