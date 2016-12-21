
module.exports = function(grunt) {

grunt.initConfig({
  
jasmine: {
        coverage: {
            src: 'src/*.js',
            options: {
                specs: 'test/*.js',
                junit: {
                    path: 'reports/testresults'
                   },
                template: require('grunt-template-jasmine-istanbul'),
                templateOptions: {
                    coverage: 'reports/coverage.json',
                    report: [
                        {
                            type: 'cobertura',
                            options: {
                                dir: 'reports/coverage'
                            }
                                                     
                        },
                                                
                        {
                            type: 'text-summary'
                        }
                    ]
                }
            }
        }
    },

war: {
            target: {
                options: {
                    war_verbose: true,
                    war_dist_folder: 'build',           // Folder path seperator added at runtime. 
                    war_name: 'jenkinwar',            // .war will be appended if omitted 
                    webxml_display_name: 'Jenkin WAR'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['**'],
                        dest: ''
                    }
                ]
            }
        }



});


  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks( 'grunt-war' );
  
  grunt.registerTask('run', ['jasmine', 'war']);

  
};